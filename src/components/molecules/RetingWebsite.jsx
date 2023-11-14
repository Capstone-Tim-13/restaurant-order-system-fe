import { Tabs } from '@mantine/core';
import React from 'react';
import RetingWebPublish from './RetingWebPublish';
import RetingWebAntrian from './RetingWebAntrian';

export default function RetingWebsite({ datas }) {
  return (
    <Tabs.Panel value="website">
      <RetingWebPublish datas={datas} />
      <RetingWebAntrian datas={datas} />
    </Tabs.Panel>
  );
}
