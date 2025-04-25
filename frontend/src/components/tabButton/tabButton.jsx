import "./tabButton.scss";

function TabButton({ active, setActive}) {
    return (
        <div className="tabButton">
            <button
                onClick={() => setActive("user")}
                className={active === "user" ? "active" : ""}
            >
                Users
            </button>
            <button
                onClick={() => setActive("agent")}
                className={active === "agent" ? "active" : ""}
            >
                Agents
            </button>
            <button
                onClick={() => setActive("post")}
                className={active === "post" ? "active" : ""}
            >
                Listings
            </button>
        </div>
    );
}
export default TabButton;