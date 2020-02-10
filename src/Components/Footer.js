import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default ({ muscles, category, onSelect})=> {
  const index = category

  return <Paper square>
      <Tabs
        value={0}
        onChange
        indicatorColor="primary"
        textColor="primary"
        centered
      > 
        <Tab label="All" />
        {muscles.map(groups =>
          <Tab label={groups} />
        )}
      </Tabs>
    </Paper>
}