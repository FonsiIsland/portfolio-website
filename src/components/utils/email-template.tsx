import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  fullName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            backgroundColor: "#4A90E2",
            color: "#ffffff",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "24px" }}>
            Neue Nachricht über dein Portfolio
          </h1>
        </div>
        <div style={{ padding: "20px", color: "#333333", lineHeight: "1.5" }}>
          <p>
            <strong>Name:</strong> {fullName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Nachricht:</strong>
          </p>
          <p
            style={{
              backgroundColor: "#f9f9f9",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            {message}
          </p>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #eeeeee",
              margin: "20px 0",
            }}
          />
          <p style={{ fontSize: "12px", color: "#999999" }}>
            Dies ist eine automatisch generierte Nachricht von deinem Portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
