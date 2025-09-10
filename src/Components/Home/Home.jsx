import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();   
  const username = location.state?.username || "Guest";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Welcome {username} ✨</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id atque velit
        corrupti nisi alias earum possimus exercitationem fugit consectetur
        iusto.
      </p>
      <button onClick={() => navigate("/about")} style={styles.button}>
        About Me 👑
      </button>
      <button onClick={() => navigate("/contact")} style={styles.button}>
        Contact Me ☎
      </button>
    </div>
  );
}

const styles = {
  button: {
    margin: "10px",
    padding: "10px 15px",
    borderRadius: "6px",
    border: "none",
    background: "green",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Home;
