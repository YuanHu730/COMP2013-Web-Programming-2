
function ColorBox({ color }) {
    const click = () => {
        window.location.reload();
    };

    return (
        <div onClick={click} style={{
            width: "50px",
            height: "50px",
            backgroundColor: color,
            border: "none",
            cursor: "pointer"
        }}
        >
        </div>
      );
}

export default ColorBox
