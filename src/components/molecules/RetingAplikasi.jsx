import { Tabs } from '@mantine/core';
import React from 'react';

import RetingAppPublish from './RetingAppPublish';
import RetingAppAntrian from './RatingAppAntrian';

export default function RetingAplikasi(props) {
  const { datas, formatTanggal } = props;

  return (
    <Tabs.Panel value="aplikasi">
      <RetingAppPublish datas={datas} formatTanggal={formatTanggal} />
      <RetingAppAntrian datas={datas} formatTanggal={formatTanggal} />
    </Tabs.Panel>
  );
}
