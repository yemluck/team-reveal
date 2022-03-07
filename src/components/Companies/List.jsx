import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import Pagination from './Pagination'

// const companies = ['apple', 'google', 'Netflix', 'meta'];



function List() {

    const companies = useSelector(store => store.companies);

    return (
        <div>
            <h3>Click on a company's name for more details</h3>
            {
                companies.map((company, i) => {
                    return (<div key={i}>
                        <Item company={company.company} />
                    </div>)
                })
            }
            <Pagination />
        </div>
    )
}

export default List;