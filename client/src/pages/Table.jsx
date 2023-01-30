


const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description $</th>

          </tr>
          {data.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>{product.category_id}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;