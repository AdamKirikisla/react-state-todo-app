export default function Main(){
    return(
        <main>
            <form action="">
                <input type="text"placeholder="Add a task..." />

                
                <div className="radio-inputs">

                    <label className="radio">
                        <input type="radio" name="priority" value="low"/>
                        <span className="radio-text">Low</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="priority" value="medium" defaultChecked/>
                        <span className="radio-text">Medium</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="priority" value="high"/>
                        <span className="radio-text">High</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="priority" value="urgent"/>
                        <span className="radio-text">Urgent</span>
                    </label>


                </div>
                
            </form>
        </main>
    )
}