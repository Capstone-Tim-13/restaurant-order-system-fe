import RetingOrganism from '../components/organisms/RetingOrganism';

export default function RetingPage() {
  //   const [datas, setDatas] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const api = 'https://654b557f5b38a59f28eee3f9.mockapi.io/reting';
  //       try {
  //         const response = await axios.get(api);
  //         const responseData = await response.data;
  //         setDatas(responseData);
  //         //   setSortedData(responseData);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div>
      <RetingOrganism />
    </div>
  );
}
