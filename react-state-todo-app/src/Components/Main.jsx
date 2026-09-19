export default function Main(){
    return(
        <main>
            <form action="">
                <input type="text"placeholder="Add a task..." />

                
                <div className="radio-inputs">

                    <label className="radio">
                        <input type="radio" name="priority" value="low"/>
                        <span className="name">Low</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="priority" value="low"/>
                        <span className="name">Medium</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="priority" value="low"/>
                        <span className="name">High</span>
                    </label>

                    <label className="radio">
                        <input type="radio" name="priority" value="low"/>
                        <span className="name">Urgent</span>
                    </label>


                </div>
                
            </form>
        </main>
    )
}