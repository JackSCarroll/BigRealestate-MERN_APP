import './List.scss'
import Card from '../card/Card'

function List({posts}){
    return(
        <div className='list'>
            {posts.map(item=>(
                <Card key={item.id} item={item} isSaved={item.isSaved}/>
            ))}
        </div>
    )
}

export default List