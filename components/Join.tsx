"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: { name?: string; email?: string } = {};
    if (!name.trim()) e.name = "Please tell us your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "That doesn't look like a valid email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setDone(true);
  };

  return (
    <section className="section join" id="join">
      <div className="wrap grid">
        <div>
          <span className="eyebrow reveal" style={{ color: "var(--on-dark-mut)" }}>
            Join the Family
          </span>
          <h2 className="reveal d1">Everyone is most welcome.</h2>
          <p className="reveal d1">
            Anyone interested in being part of this spiritual family is warmly welcomed. Become a
            member and we will connect you to servant-leaders who can guide you in your practice and
            loving service.
          </p>
          <p className="reveal d2" style={{ marginBottom: 0 }}>
            Receive satsang invitations, new publications, and the Vaiṣṇava calendar — straight to
            your inbox.
          </p>
        </div>

        <div className="reveal d1">
          {done ? (
            <div className="success">
              <div className="check">
                <Icon name="check" size={26} />
              </div>
              <h3>Welcome, {name.split(" ")[0]}.</h3>
              <p style={{ marginBottom: 0, color: "var(--on-dark)" }}>
                Thank you for joining. A servant-leader will reach out to {email} soon with a warm hello.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Your name"
                    className={errors.name ? "invalid" : ""}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              {errors.name && <div className="err">{errors.name}</div>}
              <div className="field">
                <input
                  type="email"
                  placeholder="Email address"
                  className={errors.email ? "invalid" : ""}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <div className="err">{errors.email}</div>}
              <button type="submit" className="btn btn-primary">
                Become a member <Icon name="arrow" size={16} />
              </button>
              <p className="note">We honor your privacy. No spam — only nourishment for the soul.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
