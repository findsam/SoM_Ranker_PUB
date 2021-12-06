import React from "react";
import { useCtx } from "../Store/useCtx";
import { Title } from "./UI/Title";
import { RiAddLine } from "react-icons/ri";
import { WeekRow } from "./UI/WeekRow";

export const Weeks: React.FC = () => {
  const { weeks, setBracket } = useCtx();
  if (!weeks) return null;

  return (
    <>
      <div className="week">
        <Title>Weekly breakdown:</Title>
        <p style={{ marginTop: "-.5rem", marginBottom: ".5rem" }}>
          These calculations are based on Blizzards API and are scaled/flattened low-end based on the given values to ensure there's no false-results.
        </p>
        {weeks.map((week, index) => (
          <WeekRow key={index} week={week} index={index} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="btn" onClick={() => setBracket(0)}>
          <p>Add New Week</p>
          <aside>
            <div>
              <RiAddLine size={22} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
