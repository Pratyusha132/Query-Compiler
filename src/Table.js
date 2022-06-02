
function Table(props) {
    const {data} = props;
    const csv = 
    <table>
        <tbody>
        {data.map((item) => {
            return (
            <tr>
                <td>{item.supplierID}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.city}</td>
                <td>{item.region}</td>
                <td>{item.postalCode}</td>
                <td>{item.country}</td>
            </tr>
            );
        })}
        </tbody>
    </table>
    return csv;
}

export default Table;