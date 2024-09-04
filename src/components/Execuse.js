import { useQuery } from 'react-query';
import Axios from 'axios';

export const Execuse = ({ category, setCategory }) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["Execuse", category], 
    () => Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => res.data),
    {
      enabled: !!category,
      cacheTime: 0
    }
  );

  return (
    <div className="container mt-5">
      <h1 className="m-2">Generating Excuse</h1>
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" onClick={() => {setCategory("family"); refetch();}}>Family</button>
          <button className="btn btn-outline-success me-2" type="button" onClick={() => {setCategory("office"); refetch();}}>Office</button>
          <button className="btn btn-outline-success me-2" type="button" onClick={() => {setCategory("party"); refetch();}}>Party</button>
        </form>
      </nav>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center h-60vh">
          <div className="spinner-border" role="status">
          </div>
        </div>)
      : error ? (<div>{error}</div>)
      : <p>{data ? data[0].excuse : "No excuse found"}</p>}
    </div>
  );
};
