import { Loader } from '@mantine/core';
import ListMenu from '../atoms/ListMenu';

export default function TbodyMolecules({ datas, loading, fetchData }) {
  return loading ? (
    <Loader color="orange" className="absolute left-[50%]" />
  ) : (
    <tbody>
      {datas?.map((value, index) => (
        <ListMenu data={value} key={index} fetchData={fetchData} />
      ))}
    </tbody>
  );
}
