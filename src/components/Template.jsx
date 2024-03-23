export default function Template({ title, desc1, desc2, image, formtype, setloggedin }) {
    // this template is created in order to have similar components for both login ansd signup page.  
    return (
        <div className="">
            <div className="">
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

            </div>
        </div>
    )
} 