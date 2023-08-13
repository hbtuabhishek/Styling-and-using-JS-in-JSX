import './ExpenseItem.css';

function ExpenseItem()
{
    return (
    <div className="expense-item">
        <div>
            <div>January 01 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">200</div>
            </div>
        </div>
        
    </div>
    );
}
export default ExpenseItem;