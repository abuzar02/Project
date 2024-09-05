"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../style/gallery.css';
import Parent from './mudra';
import Award from './award';
import Confident from './confenent';
import Program from './program';
import Link from 'next/link';


export default () => (
  <>

    <div className='bgheimage'>
      <div className='container'>
        <div className='gallery-flex'>
          <h2>Gallery</h2>
          <ul>
            <li><Link href='/'>Home</Link></li>
            /
            <li><Link className='color-active' href='#'>Gallery</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='containerr'>
      <Tabs>
        <TabList>
          <Tab>MUDRA Inauguration</Tab>
          <Tab>Awards</Tab>
          <Tab>Conferences</Tab>
          <Tab>Programmes</Tab>
        </TabList>

        <TabPanel>
          <Parent />
        </TabPanel>
        <TabPanel>
          <Award />
        </TabPanel>
        <TabPanel>
          <Confident />
        </TabPanel>
        <TabPanel>
          <Program />
        </TabPanel>
      </Tabs>
    </div>
  </>
);