import { Tabs } from '@mantine/core';
import React from 'react';

import RetingAppPublish from './RetingAppPublish';
export default function RetingAplikasi(props) {
  const { datas, formatTanggal } = props;

  return (
    <Tabs.Panel value="aplikasi">
      <RetingAppPublish datas={datas} formatTanggal={formatTanggal} />
    </Tabs.Panel>
  );
}
