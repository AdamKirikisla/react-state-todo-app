export default function PriorityFilter(){

    return(


            <div className="filter-priority">

                 <label>
                    <input type="radio" name="filter" value="all"/>
                    <span>All</span>
                </label>
                
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
    )

}