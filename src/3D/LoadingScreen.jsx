import { useProgress } from "@react-three/drei"

export const LoadingScreen = ()=>{
    const { progress } = useProgress();
    return(
        <>
        <div className="loadingScreen">
            <div className="loadingScreen__progress">
                <div className="loadingScreen__progress__value"
                    style={{width: `${progress}%`}}/>
            </div>
            <div className="loadingScreen__board">
                <h1 className="loadingScreen__title">I'm loading</h1>
            </div>
        </div>
        </>
    )
}