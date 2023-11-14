import { Tabs } from '@mantine/core';
import React from 'react';

import RetingAppPublish from './RetingAppPublish';
import RetingAppAntrian from './RatingAppAntrian';

export default function RetingAplikasi(props) {
  const { datas } = props;

  return (
    <Tabs.Panel value="aplikasi">
      <RetingAppPublish datas={datas} />
      <RetingAppAntrian datas={datas} />
    </Tabs.Panel>
  );
}
