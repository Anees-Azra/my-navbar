import * as React from 'react'
import './styles/Blog.css'
import {createTheme, Stack,ThemeProvider,Switch,Box,
  Typography,CssBaseline,AppBar,Container, Grid, Button,
  ButtonBase,Link,Divider, IconButton} from '@mui/material';
import { grey , blue} from '@mui/material/colors';
import {useState} from "react";
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';

const light = {
  palette:{
    mode: "light"
  }
}

const dark = {
  palette:{
    mode: "dark"
  }
}

const Blog = () => {

  const [isDarkTheme,setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme = {isDarkTheme? createTheme(dark) : createTheme(light)}>
    <CssBaseline />

      <Box sx={{width:'100%',textAlign: 'center',bgcolor:'#f0f0f0'}}  >
        <div>
            <Typography sx={{fontWeight: 'bold'}} variant='h7' color="black"gutterBottom>Support Ukraine UA 
            </Typography>
            <Typography sx={{fontWeight: 'bold'}} variant='h7' color="#407ca9"  gutterBottom>  Help Provide Humanitarian Aid to Ukraine 
            </Typography>
        </div>
      </Box>
    
      
    < Grid Container>
       <Box 
            display="flex"
            justifyContent="space-between">
          
            <img src='logo192.png' align="left" height='50px' width='50px'/>
            
            <ButtonBase justifyContent ="space-between" >
            <Button   
             variant="cta" color="default" disabled='true' 
             href='https://react.dev/blog'
             sx={{ height: 40 ,width:600,textTransform: 'none',bgcolor:'#f0f0f0',  justifyContent:'space-between'}}  
             style={{borderRadius: 15, padding: "10px 15px"  }}>
            <SearchIcon/>
             Search
            <Button variant='cta' color='default'sx={{ height: 20 ,width:10,bgcolor:'#ffffff',textTransform: 'none'}}
             style={{  align:'left',borderRadius: 5, padding: "10px 20px"  }} >
             ctrl
            </Button> 
            <Button variant='cta' color='default'sx={{ height: 20 ,width:10,bgcolor:'#ffffff',textTransform: 'none'}}
             style={{ align:'left',borderRadius: 5, padding: "10px 20px"  }} >
             K
            </Button> 
            </Button>
            
            <Button variant="cta" color="grey" align="flex"  sx={{ height: 40 ,textTransform: 'none'}}  
             href='https://react.dev/learn'
             style={{ borderRadius: 35,hover: "#dbd6d4", padding: "10px 20px"  }}>
              Learn
            </Button>
            
            <Button variant="cta" color="grey"  sx={{ height: 40 ,textTransform: 'none'}}
             href='https://react.dev/reference/react'
             style={{ borderRadius: 35,hover: "#dbd6d4", padding: "10px 20px"  }}>
             Reference
            </Button>
                     
            <Button variant="cta" color="grey"  sx={{ height: 40,textTransform: 'none' }}
             href='https://react.dev/community/react'
             style={{ borderRadius: 35,hover: "#dbd6d4", padding: "10px 20px"  }}>
             Community
            </Button>
                    
            <Button variant="cta" sx={{color:'#69b6e0',backgroundColor:'#dbeef8', height: 40 ,textTransform:'none'}}
             href='https://react.dev/blog'
             style={{ borderRadius: 20, hover: "#dbeef8", padding: "10px 20px"  }}>
             Blog
            </Button>

            <IconButton>
            <Switch checked={isDarkTheme} onChange={changeTheme} />
            </IconButton>            

           
            <IconButton >
              <NightlightOutlinedIcon onClick={isDarkTheme} onChange={changeTheme}/>
            </IconButton>

            <GitHubIcon onClick={event =>  window.location.href='https://github.com/facebook/react/releases'} />

            </ButtonBase>
          </Box>   
        
          </Grid>
          <main>
           <Container maxWidth='md'  >
           <Typography variant='h9' align='justify' color="#407ca9" gutterBottom>
              BLOG 
           </Typography>
       
           <Typography variant='h4' text="bold"align='left' color="textPrimary" >React Blog</Typography>
           <Typography variant='h6'  text="bold" align='left' color="textPrimary" paragraph >
            This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first.
            You can also follow the
           <Link href=
                    "https://twitter.com/reactjs"
                    target="_blank"
                    underline="none"
                    color='#407ca9'>
                    @reactjs
           </Link> account on Twitter, but you won’t miss anything essential if you only read this blog.
           </Typography>
          
           <div>
         
          <Grid Container  justify="center" >
          <Grid item >
              <Button href="https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' rowSpacing={4} >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      React Labs : What We've Been Working On - March 2023
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary" gutterBottom>
                      March 22, 2023
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      In React Labs posts, we write about projects in active research and development.Since our last update, we’ve made significant progress on React Server,Components, Offscreen Rendering, and Transition Tracing, and we’d like to share what we learned.
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://twitter.com/reactjs"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2023/03/16/introducing-react-dev" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      Introducing react.dev
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      March 16, 2023
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}} variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      Today we are thrillled to launch react.dev, the new home for React and its documentation.In this
                      post,we would like to give you a tour of the new site.
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2023/03/16/introducing-react-dev"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      React Labs : What We've Been Working On - June 2022
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      June 15, 2022
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      React 18 was years in the making and with it brought valuable lessons for the React team.
                      Its release was the result of many years of research and exploring many paths. Some of those
                      paths were successful, many more were dead-ends that led to new insights.One lesson we've learned
                      is that its frustrating for the community to wait for new features without having insight into 
                      these paths that we're exploring...
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2022/03/29/react-v18" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      React v18.0
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      March 29, 2022
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      React 18 is now available on npm! In our last post, we shared step-by-step instructions 
                      for upgrading your app to React18.In this post, we'll give an overview of what's new in React18,
                      and what it means for future.
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2022/03/29/react-v18"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2022/03/08/react-18-upgrade-guide" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      How to Upgrade to React18
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      March 8, 2022
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      As we shared in the release post,React18 introduced features powered by our new concurrent 
                      renderer with a gradual adoption strategy for existing applications.In this post, we will 
                      guide you through the steps for upgrading to React18...
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2022/03/08/react-18-upgrade-guide"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2021/12/17/react-conf-2021-recap" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      React Conf 2021 Recap
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      December 17, 2022
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      Last week we hosted our 6th React Conf. In previous years, we've used the React Conf stage 
                      to deliver industry changing announcements such as React native and React Hooks. This year,
                      we shared our multi-platform vision for React, starting with the release of React18 and gradual
                      adoption of concurrent features...
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2021/12/17/react-conf-2021-recap"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2021/06/08/the-plan-for-react-18" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      The Plan for React18
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      June 8, 2021
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      The React team is excited to share a few updates:
                      .We've started work on the React18 release which will be our next major version.
                      .We've created a Workin Group to prepare the community for gradual adoption of 
                       new features in React18.
                      .We've published a React18 Alpha so that library authors can try it and provide feedback...
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2021/06/08/the-plan-for-react-18"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Grid item>
              <Button href="https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components" variant='outlined' color='primary' sx={{ width: 800, margin:-1,padding:3,textTransform: 'none' }} size='80px'>
                  <Container maxWidth='lg' >
                  
                  <Typography  sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom>
                      Introducing Zero-Bundle-Size React Server Components
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left' color="textPrimary"gutterBottom >
                      December 21, 2020
                  </Typography>
                  <Typography  sx={{fontWeight: 'bold'}}variant='h7' align='left'color="textSecondary" paragraph gutterBottom>
                      2020 has been a long year.As it comes to an end we wanted to share a specialHoliday Update 
                      on our research into zero-bundle-size React Server Components.To introduce React Server Components,
                      we have prepared a talk and a demo.If you want, you can check them out during the holidays or
                      later when work picks back up in the new year...
                  </Typography>
                  <Typography>
                    <Link href=
                       "https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components"
                        target="_blank"
                        underline="none">
                     Read more
                    </Link>
                    </Typography>
                    </Container>
                  </Button>
          </Grid> 
         
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Divider />

          <Typography sx={{fontWeight: 'bold'}}variant='h5' text="bold"align='left' color="textPrimary" gutterBottom >All release notes</Typography>
           
           <Typography variant='h7'  text="bold" align='left' color="textPrimary" gutterBottom paragraph >
            Not every React release deserves its own blog post, but you can find a devasted changelog
            for every release in 
            
            <Button sx={{textTransform: 'none',bgcolor:'#f0f0f0'}}>
           <Link href=
                    "https://github.com/facebook/react/blob/main/CHANGELOG.md"
                    target="_blank"
                    underline="none"
                    color='#407ca9'>
                    CHANGELOG.md
           </Link> 
           </Button>file in the React repository, as well as on the 
           <Link href=
                    "https://github.com/facebook/react/releases"
                    target="_blank"
                    underline="none"
                    color='#407ca9'>
                     Releases
           </Link> page
           </Typography>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Divider />

          <Typography sx={{fontWeight: 'bold'}}variant='h5' align='left' color="textPrimary" gutterBottom >Older Posts</Typography>
           
           <Typography variant='h7'  text="bold" align='left' color="textPrimary" gutterBottom paragraph >
            See the 
           <Link href=
                    "https://legacy.reactjs.org/blog/all.html/"
                    target="_blank"
                    underline="none"
                    color='#407ca9'>
                    older posts
           </Link>
           </Typography>
          </Grid>

          &nbsp;&nbsp;&nbsp;
          <Divider />

          <Stack direction="row" spacing={6} useFlexGap flexWrap="wrap">
            <item>
              <Box display='flex'>
            <img src='meta.png'  height='25px' width='25px'/>
            <Typography sx={{fontWeight:'bold'}}variant='h6' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://opensource.fb.com/"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                      MetaOpenSource
             </Link>
            </Typography>
            </Box>

            <Typography></Typography>

            <Box display='flex'> 
            <img src='copyright.png'  height='15px' width='15px'/>
            <Typography variant='h9' align='left' color="textPrimary" gutterBottom >2023</Typography>
            </Box> 
            </item>

            
           <Stack direction="column" spacing={6} useFlexGap flexWrap="wrap">
            <item>
            <Typography sx={{fontWeight:'bold'}}variant='h6' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://opensource.fb.com/"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Learn React
             </Link>
            </Typography>

            <Typography></Typography>
            
            <Typography variant='h7' align='left' color="textPrimary" gutterBottom>
             <Link href=
                    "https://react.dev/learn"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Quick Start
             </Link>
            </Typography>

            <Typography></Typography>

            <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/installation"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Installation
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/describing-the-ui"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Describing the UI
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/adding-interactivity"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Adding Interactivity
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/managing-state"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Managing States
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/escape-hatches"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Escape Hatches
           </Link>
           </Typography>
           </item>

           <item>
            <Typography sx={{fontWeight:'bold'}}variant='h6' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/community"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Community
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Code of Conduct
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/community/team"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Meet the Team
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/community/docs-contributors"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Docs Contributors
             </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/community/acknowledgements"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Acknowledgements
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/managing-state"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Managing States
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/learn/escape-hatches"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Escape Hatches
           </Link>
           </Typography>
           </item>

          </Stack>
            <Stack direction="column" spacing={6} useFlexGap flexWrap="wrap">
            <item>
            <Typography sx={{fontWeight:'bold'}}variant='h6' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/reference/react"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       API Reference
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/reference/react"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       React APIs
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/reference/react-dom"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       React DOM APIs
           </Link>
           </Typography>
           </item>

           <Typography></Typography>
           <Typography></Typography>
           
           <item>
            <Typography sx={{fontWeight:'bold'}}variant='h6' align='left' color="textPrimary" gutterBottom>
             More </Typography>
           <Typography></Typography>
           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://react.dev/blog"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Blog
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://reactnative.dev/"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       React Native
           </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://opensource.fb.com/legal/privacy/"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Privacy
             </Link>
           </Typography>

           <Typography></Typography>

           <Typography variant='h7' align='left' color="textPrimary" gutterBottom  >
             <Link href=
                    "https://opensource.fb.com/legal/terms/"
                    target="_blank"
                    underline="none"
                    color='textPrimary'>
                       Terms
           </Link>
           </Typography>

           <Typography></Typography>

           </item>

           <Box display='flex' justifyContent='space-between'>
            <FacebookIcon onClick={event =>  window.location.href='https://www.facebook.com/react'} />
            <TwitterIcon onClick={event =>  window.location.href='https://twitter.com/reactjs'} />
            <GitHubIcon onClick={event =>  window.location.href='https://github.com/facebook/react'} />
            <Typography></Typography>
           </Box>
           
           </Stack>
           
        </Stack> 
      </div>   
    </Container>
    </main>
    </ThemeProvider>         
  )
}



export default Blog;
