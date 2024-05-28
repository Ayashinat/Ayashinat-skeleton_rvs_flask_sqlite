import AppRouter from "./AppRouter";

export default function Main() {
    const mainStyle={
        "flexGrow": "1",
      }
    return (
        <div style={mainStyle}>
            <AppRouter />
        </div>
    );
};