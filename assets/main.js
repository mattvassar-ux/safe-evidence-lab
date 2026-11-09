(function () {
  "use strict";
  var D = window.SAFE || {};

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function initials(name) {
    var w = name.replace(/,.*$/, "").trim().split(/\s+/);
    return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
  }

  // Portrait: shows images/team/<photo>.jpg, falling back to initials.
  function portrait(person, size) {
    var frame = el("div", "portrait" + (size ? " portrait-" + size : ""));
    frame.appendChild(el("span", "portrait-initials", initials(person.name)));
    var img = new Image();
    img.alt = "Portrait of " + person.name.replace(/,.*$/, "");
    img.loading = "lazy";
    img.decoding = "async";
    // Try common extensions so .jpeg, .png, .webp or uppercase names also work.
    var exts = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".jpg.jpg", ".jpeg.jpg"];
    var i = 0;
    img.onload = function () { frame.classList.add("has-photo"); };
    img.onerror = function () {
      i += 1;
      if (i < exts.length) img.src = "images/team/" + person.photo + exts[i];
      else img.remove();
    };
    img.src = "images/team/" + person.photo + exts[0];
    frame.appendChild(img);
    return frame;
  }

  function personCard(p, extra) {
    var card = el("article", "person");
    card.appendChild(portrait(p));
    var body = el("div", "person-body");
    body.appendChild(el("h4", "person-name", p.name));
    body.appendChild(el("p", "person-role mono", p.role));
    if (p.focus) body.appendChild(el("p", "person-focus", p.focus));
    if (extra) extra(body, card);
    card.appendChild(body);
    return card;
  }

  // Director
  var dir = document.getElementById("director");
  if (dir && D.director) {
    var d = D.director;
    dir.appendChild(portrait(d, "lg"));
    var b = el("div", "director-body");
    b.appendChild(el("h4", "director-name", d.name));
    b.appendChild(el("p", "person-role mono", d.role));
    var ul = el("ul", "director-titles");
    d.titles.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    b.appendChild(ul);
    b.appendChild(el("p", "director-bio", d.bio));
    dir.appendChild(b);
  }

  function fill(id, list) {
    var host = document.getElementById(id);
    if (!host || !list) return;
    list.forEach(function (p) { host.appendChild(personCard(p)); });
  }
  fill("people-faculty", D.faculty);
  fill("people-program", D.program);

  // Students, grouped under headings (Winter, Summer 2027, Summer 2028...)
  var sHost = document.getElementById("people-students");
  var groups = D.studentGroups || [];
  var byId = {};
  groups.forEach(function (g) { byId[g.id] = g; });
  if (sHost && D.students) {
    groups.forEach(function (g) {
      var members = D.students.filter(function (s) { return (s.groups || []).indexOf(g.id) > -1; });
      if (!members.length) return;
      var section = el("section", "cohort");
      section.dataset.group = g.id;
      var head = el("div", "cohort-head");
      head.appendChild(el("h4", "cohort-title", g.title));
      head.appendChild(el("span", "cohort-count mono", members.length + (members.length === 1 ? " lead" : " leads")));
      if (g.note) head.appendChild(el("p", "cohort-note", g.note));
      section.appendChild(head);
      var grid = el("div", "people-grid");
      members.forEach(function (s) {
        grid.appendChild(personCard({ name: s.name, photo: s.photo, role: "Medical Student Team Lead", focus: s.work }, function (body) {
          var tags = el("p", "season-tags");
          s.groups.forEach(function (id) {
            var gg = byId[id]; if (!gg) return;
            tags.appendChild(el("span", "tag tag-" + gg.tone, gg.tag));
          });
          body.appendChild(tags);
        }));
      });
      section.appendChild(grid);
      sHost.appendChild(section);
    });
  }

  // Filter chips for the student groups, built from studentGroups
  var filterHost = document.getElementById("cohort-filter");
  if (filterHost) {
    var allChip = el("button", "chip is-on", "All");
    allChip.type = "button"; allChip.setAttribute("data-cohort", "all"); allChip.setAttribute("aria-pressed", "true");
    filterHost.appendChild(allChip);
    groups.forEach(function (g) {
      if (!sHost.querySelector('[data-group="' + g.id + '"]')) return;
      var c = el("button", "chip", g.title);
      c.type = "button"; c.setAttribute("data-cohort", g.id); c.setAttribute("aria-pressed", "false");
      filterHost.appendChild(c);
    });
  }

  function chipGroup(selector, attr, apply) {
    var chips = document.querySelectorAll(selector + " .chip");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (o) { o.classList.remove("is-on"); o.setAttribute("aria-pressed", "false"); });
        c.classList.add("is-on"); c.setAttribute("aria-pressed", "true");
        apply(c.getAttribute(attr));
      });
    });
  }

  chipGroup("#cohort-filter", "data-cohort", function (v) {
    document.querySelectorAll(".cohort").forEach(function (sec) {
      sec.hidden = v !== "all" && sec.dataset.group !== v;
    });
  });

  // Awards
  var money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  var aHost = document.getElementById("awards");
  if (aHost && D.awards) {
    D.awards.forEach(function (a) {
      var card = el("article", "award");
      var top = el("div", "award-top");
      top.appendChild(el("p", "award-funder mono", a.funder));
      top.appendChild(el("p", "award-amount", money.format(a.amount)));
      card.appendChild(top);
      card.appendChild(el("h3", "award-title", a.title));
      var meta = el("p", "award-meta mono");
      meta.textContent = [a.id, a.dates, a.role].filter(Boolean).join("  ·  ");
      card.appendChild(meta);
      aHost.appendChild(card);
    });
  }
  var pHost = document.getElementById("past-awards");
  if (pHost && D.pastAwards) D.pastAwards.forEach(function (t) { pHost.appendChild(el("li", null, t)); });

  // Publications
  var topicNames = { harms: "Harms reporting", transparency: "Transparency & outcomes", data: "Data sharing", ai: "AI", integrity: "Integrity & testimony" };
  var pubHost = document.getElementById("pubs");
  var hl = (D.highlight || []).slice().sort(function (a, b) { return b.length - a.length; });
  function authorNode(str) {
    var p = el("p", "pub-authors");
    str.split(/,\s*/).forEach(function (name, i, arr) {
      var node = hl.indexOf(name.trim()) > -1 ? el("strong", null, name) : document.createTextNode(name);
      p.appendChild(node);
      if (i < arr.length - 1) p.appendChild(document.createTextNode(", "));
    });
    return p;
  }
  if (pubHost && D.pubs) {
    D.pubs.forEach(function (pub) {
      var li = el("li", "pub");
      li.dataset.topic = pub.topic;
      var side = el("div", "pub-side");
      side.appendChild(el("span", "pub-year mono", String(pub.year)));
      side.appendChild(el("span", "pub-topic", topicNames[pub.topic] || ""));
      li.appendChild(side);
      var main = el("div", "pub-main");
      var h = el("h3", "pub-title");
      var a = el("a", null, pub.title);
      a.href = "https://doi.org/" + pub.doi;
      a.target = "_blank"; a.rel = "noopener";
      h.appendChild(a);
      main.appendChild(h);
      main.appendChild(authorNode(pub.authors));
      var j = el("p", "pub-journal");
      j.appendChild(el("em", null, pub.journal));
      j.appendChild(el("span", "mono pub-doi", "doi:" + pub.doi));
      main.appendChild(j);
      li.appendChild(main);
      pubHost.appendChild(li);
    });
  }
  chipGroup(".pub-filter", "data-topic", function (v) {
    document.querySelectorAll(".pub").forEach(function (li) {
      li.hidden = v !== "all" && li.dataset.topic !== v;
    });
  });

  // Hero ledger (illustrative values)
  var ledger = document.getElementById("ledger-rows");
  var rows = [
    { id: "NCT-A", reg: 42, pub: 31 }, { id: "NCT-B", reg: 18, pub: 18 },
    { id: "NCT-C", reg: 57, pub: 29 }, { id: "NCT-D", reg: 24, pub: 11 },
    { id: "NCT-E", reg: 36, pub: 33 }, { id: "NCT-F", reg: 49, pub: 20 }
  ];
  if (ledger) {
    var max = 60;
    rows.forEach(function (r) {
      var li = el("li", "ledger-row");
      li.appendChild(el("span", "ledger-id mono", r.id));
      var track = el("span", "ledger-track");
      var reg = el("span", "bar bar-reg"); reg.style.setProperty("--w", (r.reg / max * 100) + "%");
      var pub = el("span", "bar bar-pub"); pub.style.setProperty("--w", (r.pub / max * 100) + "%");
      track.appendChild(reg); track.appendChild(pub);
      if (r.reg > r.pub) {
        var miss = el("span", "bar bar-miss");
        miss.style.setProperty("--l", (r.pub / max * 100) + "%");
        miss.style.setProperty("--w", ((r.reg - r.pub) / max * 100) + "%");
        track.appendChild(miss);
      }
      li.appendChild(track);
      var gap = r.reg - r.pub;
      li.appendChild(el("span", "ledger-gap mono" + (gap === 0 ? " is-zero" : ""), gap === 0 ? "0" : "−" + gap));
      ledger.appendChild(li);
    });
  }

  // Mobile nav
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  // Copy email
  var copyBtn = document.getElementById("copy-email");
  var emailText = document.getElementById("email-text");
  if (copyBtn && emailText) {
    copyBtn.addEventListener("click", function () {
      function selectIt() {
        var r = document.createRange(); r.selectNodeContents(emailText);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        copyBtn.textContent = "Selected";
      }
      try {
        navigator.clipboard.writeText(emailText.textContent).then(function () {
          copyBtn.textContent = "Copied";
          setTimeout(function () { copyBtn.textContent = "Copy"; }, 1800);
        }, selectIt);
      } catch (e) { selectIt(); }
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
