import React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { queryStyle } from "@src/constants/booleanScreen";
import { LandingHeader } from "@components/HeaderDashboard/LandingHeader";

export const QueryPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div id="query-container">
      <LandingHeader avatar={null} />
      <div style={{ ...queryStyle.main }}>
        <p className="landing-about" style={{ paddingTop: "100px", margin: 0 }}>
          <span> a platform for </span>
          <span style={{ color: "#C6441D" }}>self-actualization </span>
          <br style={{ marginTop: "5px" }} />
          <span>and </span>
          <span style={{ color: "#C6441D" }}>collaboration</span>
        </p>
        <button
          type="button"
          style={{
            color: localStorage.getItem("theme") === "dark" ? "white" : "black",
            ...queryStyle.question
          }}
          onClick={() => { navigate("/ZinZenFAQ"); }}
        >
          {t("ihavequestions")}
        </button>
        <button
          type="button"
          style={{
            color: localStorage.getItem("theme") === "dark" ? "white" : "black",
            ...queryStyle.question
          }}
          onClick={() => { navigate("/"); }}
        >
          {t("ialreadyknowZinZen")}
        </button>
      </div>
    </div>
  );
};
