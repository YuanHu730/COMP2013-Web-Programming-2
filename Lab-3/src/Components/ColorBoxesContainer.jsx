import ColorBox from './ColorBox.jsx'

function ColorBoxesContainer({ colors }) {
    // console.log("colors: ", colors);
    return (
        <div style={{
            display: "flex", 
            flexWrap: "wrap",
            alignContent: "flex-start",
            width: "250px",
            height: "250px",
            border: "10px solid black"
        }}>
            {colors.map((color, index) => (
                <ColorBox key={index} color={color} />
            ))}
        </div>
      );
}

export default ColorBoxesContainer
