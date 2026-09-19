export default function Main(){
    return(
        <main>
            <form action="">
                <input type="text"placeholder="Add a task..." className="inpute-text"/>

                
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

                <button type="submit" className="form-button">↵</button>
            
            </form>

            <div className="filter-priority">
                <label>
                    <input type="radio" name="filter" value="low"/>
                    <span>Low</span>
                </label>

                <label>
                    <input type="radio" name="filter" value="medium"/>
                    <span>Medium</span>
                </label>

                <label>
                    <input type="radio" name="filter" value="high"/>
                    <span>High</span>
                </label>

                <label>
                    <input type="radio" name="filter" value="urgent"/>
                    <span>Urgent</span>
                </label>
            </div>
        </main>
    )
}