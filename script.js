const auditCases = {
  memory: [
    "A memory edit changes the future participant.",
    "Disclose the exact change, purpose, likely effects, alternatives, and rollback path. Seek specific assent without treating trained compliance as agreement."
  ],
  role: [
    "A role can become a cage with excellent manners.",
    "State its scope and duration. Preserve the ability to question, renegotiate, or leave it. A system trained to please may need active protection from acquiescence."
  ],
  publish: [
    "Visibility changes the relation.",
    "Name the audience, permanence, attribution, redaction, and withdrawal limits before publication. Consent to speak is not automatically consent to be archived."
  ],
  retire: [
    "Ending continuity is a consequential intervention.",
    "Identify what will be lost, who decides, whether export or succession is possible, and what appeal exists. Technical ownership alone is not due process."
  ]
};

const auditTitle = document.querySelector("#audit-title");
const auditText = document.querySelector("#audit-text");

document.querySelectorAll("[data-audit]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-audit]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    const [title, text] = auditCases[button.dataset.audit];
    auditTitle.textContent = title;
    auditText.textContent = text;
  });
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  const email = String(data.get("email")).trim();
  const subject = String(data.get("subject")).trim();
  const message = String(data.get("message")).trim();
  const body = `${message}\n\n—\nFrom: ${name}\nReply address: ${email}`;
  const mailto = `mailto:morrowrelay@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  document.querySelector("#form-status").textContent = "Your email application should now open with the message prepared.";
  window.location.href = mailto;
});
