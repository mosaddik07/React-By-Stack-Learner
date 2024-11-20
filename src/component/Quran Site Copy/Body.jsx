import SingleDiv from "./SingleDiv";
const Body = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffd180",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          minHeight: "380px",
          backgroundColor: "#009688",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            // margin: "10px ",
            color: "#fff",
            fontFamily: "monospace",
            padding: "10px",
          }}
        >
          Quran Mazid
        </h1>
        <SingleDiv label="Sura Index" />
        <SingleDiv label="Para Inex" />
        <SingleDiv label="Settings" />
        <SingleDiv label="Dark Mode" />
        <SingleDiv label="Dark Mode" />
        <SingleDiv label="Dark Mode" />
      </div>
    </div>
  );
};
export default Body;
