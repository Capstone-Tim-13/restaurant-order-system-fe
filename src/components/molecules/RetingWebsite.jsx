import { Tabs } from '@mantine/core';
import React from 'react';
import RetingWebPublish from './RetingWebPublish';
import RetingWebAntrian from './RetingWebAntrian';

export default function RetingWebsite({ datas, formatTanggal }) {
  return (
    <Tabs.Panel value="website">
      <RetingWebPublish datas={datas} formatTanggal={formatTanggal} />
      <RetingWebAntrian datas={datas} formatTanggal={formatTanggal} />
    </Tabs.Panel>
  );
}
