export default function Conditionals(){
    const canSee = true;
    return (
        <>
            <h1>Conditionals Example</h1>
            {
                canSee ?
                    <div>Secret Key: wjoe8932039kjsd990w</div>
                    :
                    <span>Access Denied</span>
            }
        </>
    )
}