export default function Placeholder(props){
    return(
        <>
        <mesh {...props }>
        <boxGeometry arg={[1,1,1,2,2,2]}/>
        <meshBasicMaterial wireframe color="orange"/>
        </mesh>
        </>
    )
}