// Import React
import React, { Component } from 'react';
import Baseline from 'react-baseline';
import basekick from 'basekick';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  seek: require('../assets/seek.svg'),
  me: require('../assets/me.jpg'),
  twitter: require('../assets/twitter.svg'),
  github: require('../assets/github.svg'),
  form: require('../assets/form.png'),
  seekHome: require('../assets/seek-home.png'),
  styleGuide: require('../assets/styleGuide.png'),
  markedup: require('../assets/markedup.png')
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

const Card = ({ children, style = {} }) => (
  <div style={{
    background: 'white',
    minHeight: '6em',
    height: '26vh',
    maxHeight: '10em',
    textAlign: 'left',
    position: 'relative',
    zIndex: -1,
    ...style
  }}>
    {children}
  </div>
);

const MyCode = ({ children }) => {
  return (
    <Code textColor="primary" style={{backgroundColor: '', fontSize: '1.1em', padding: 0}}>{ children }</Code>
  );
};

const rowHeight = 9;
const baseFontSize = 10;
const TextDemo = ({
  children,
  scale,
  rows,
  kick,
  highlightDescender,
  highlightLineHeightDiff,
  zoom = 3,
  highlight = true
}) => {
  return (
    <Baseline style={{width: '100%'}} lineHeight={rowHeight * zoom} type="bar" color="rgba(0, 0, 0, 0.15)">
      <Card>
        <p style={{ position: 'relative', margin: 0, display: 'inline-block' }}>
          { highlight ?
              <Highlight
                descender={highlightDescender}
                lineHeightTop={highlightLineHeightDiff}
              /> :
              null
          }

          <BasekickText
            typeSizeModifier={scale}
            descenderHeightScale={0.15}
            typeRowSpan={rows}
            gridRowHeight={rowHeight * zoom}
            baseFontSize={baseFontSize * zoom}
            on={kick}>
            { children }
          </BasekickText>

          { highlightLineHeightDiff && highlight ?
              <Highlight
                descender={highlightDescender}
                lineHeightBottom={highlightLineHeightDiff}
              /> :
              null
          }
        </p>
      </Card>
    </Baseline>
  );
};

const TertiaryHeading = ({ children, ...rest }) => (
  <Heading size={3} lineHeight={1.1} textColor="tertiary" textAlign="left" margin="0" {...rest}>
    { children }
  </Heading>
);

const PrimaryHeading = ({ children , ...rest}) => (
  <Heading size={3} lineHeight={1.1} textColor="primary" textAlign="left" margin="0" {...rest}>
    { children }
  </Heading>
);

const BasekickText = ({ children, on, ...props }) => {
  return (
    <div style={{
      ...basekick(props),
      ...(on ? {} : { transform: 'translateY(-3px)' }),
      fontFamily: 'Roboto'
    }}>
      { children }
    </div>
  );
};

const Highlight = ({ descender, lineHeightTop, lineHeightBottom }) => {
  const defaultStyles = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#b5e6fd',
    zIndex: -1
  };

  const descenderStyles = {
    top: '',
    height: '13px',
    bottom: '9px'
  };

  const lineHeightTopStyles = {
    top: 0,
    height: '10px'
  };

  const lineHeightBottomStyles = {
    top: '',
    bottom: 0,
    height: '9px'
  };

  return (
    <span style={{
      ...defaultStyles,
      ...(descender ? descenderStyles : {}),
      ...(lineHeightTop ? lineHeightTopStyles : {}),
      ...(lineHeightBottom ? lineHeightBottomStyles : {})
    }} />
  );
};

const Avatar = () => {
  return (
    <div style={{
      background: `url(${images.me}) center center no-repeat #fff`,
      backgroundSize: 'contain',
      width: '10em',
      maxWidth: '250px',
      height: '10em',
      maxHeight: '250px',
      borderRadius: '50%',
      margin: '0 auto'
    }} />
  );
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={250} theme={theme} bgcolor="tertiary">
        <Slide bgColor="tertiary" notes={(
          <div>
            its this intersection of disciplines that really excites me
            <br /><br />
            this talk is about how we've sought to improve collaboration and efficiency
            <br /><br />
            in how we design and build our products
          </div>
        )}>
          <Text bold textColor="primary" lineHeight={1.3}>
            Building a
          </Text>
          <Heading size={1} fit caps textColor="secondary">
            Ubiquitous
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            Design
          </Heading>
          <Heading size={1} fit caps lineHeight={0.9} textColor="secondary">
            Language
          </Heading>
          <Text bold textColor="primary" lineHeight={1.3}>
            with components
          </Text>
        </Slide>

        <Slide bgColor="secondary"
          notes={(
            <div>
              Conversations often focused around pixels on a screen
              <br/><br/>
              Rather than principles underpinning the design itself.
            </div>
          )}>
          <TertiaryHeading>
            Designers &
            <br/>
            developers
          </TertiaryHeading>
          <PrimaryHeading>
            talk in pixels
          </PrimaryHeading>
        </Slide>

        <Slide
          bgColor="secondary"
          bgImage={images.markedup}
          bgDarken={0.8}
          bgRepeat="repeat,no-repeat"
          bgPosition="center top"
          notes="Wireframes are unfortunately the most common form of communication between design and development">
          <TertiaryHeading style={{ fontSize: '2em' }}>
            Most communicating
          </TertiaryHeading>
          <PrimaryHeading style={{ fontSize: '2em' }}>
            via wireframes
          </PrimaryHeading>
        </Slide>

        <Slide bgColor="tertiary" notes="Only telling part of the story">
          <Heading size={3} fit caps textColor="primary">
            Wireframes
          </Heading>
          <Heading size={3} fit caps textColor="secondary">
            share designer&rsquo;s
          </Heading>
          <Heading margin="12px 0 0" size={3} fit caps textColor="primary">
            computed output
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Abstracting away
          </TertiaryHeading>
          <PrimaryHeading>
            the principled
          </PrimaryHeading>
          <TertiaryHeading>
            design process
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            This model is broken
          </Heading>
        </Slide>

        <Slide bgColor="secondary" notes={(
          <div>
            Relying on a marked-up picture to be
            <br/><br/>
            Having to be mindful that...
          </div>
        )}>
          <PrimaryHeading>
            Reverse
          </PrimaryHeading>
          <TertiaryHeading>
            engineering
          </TertiaryHeading>
          <TertiaryHeading>
            pictures
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes="Too much risk">
          <List>
            <ListItem>
              <Text textColor="tertiary">— Semantic markup</Text>
            </ListItem>
            <Appear>
              <ListItem>
                <Text textColor="tertiary">— Accessibility</Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Text textColor="tertiary">— Responsive styling</Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="tertiary" notes="Trade off arriving in thr form of">
          <Heading size={5} fit caps textColor="secondary">
            Inconsistent
          </Heading>
          <Heading size={5} fit caps textColor="secondary">
            experience
          </Heading>
          <Heading margin="-8px 0 0" size={5} fit caps textColor="secondary">
            for <S type="underline" textColor="primary">users</S>
          </Heading>
        </Slide>

        {/*--------------------------*/}
        {/*- Removing the ambiguity -*/}
        {/*--------------------------*/}
        <Slide bgColor="secondary" notes={(
          <div>
            Stop focusing on the wireframes as the contract
            <br/><br/>
            instead focus on the language
          </div>
        )}>
          <TertiaryHeading>
            Focus on
          </TertiaryHeading>
          <PrimaryHeading>
            the language
          </PrimaryHeading>
          <TertiaryHeading>
            used at build-time
          </TertiaryHeading>
        </Slide>
{/*

        <Slide bgColor="secondary" notes="...would it look like this, ...">
          <TertiaryHeading>
            What would an
          </TertiaryHeading>
          <PrimaryHeading>
            ideal language
          </PrimaryHeading>
          <TertiaryHeading>
            look like?
          </TertiaryHeading>
        </Slide>
*/}
        <Slide bgColor="secondary" notes={(
          <div>
            Where structure, design, behaviour are all last minute composition responsibilities
          </div>
        )}>
          <CodePane
            lang="html"
            source={require("raw-loader!../assets/register-before.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide bgColor="secondary" notes="Or what if we... how would that look?">
          <TertiaryHeading>
            Strive for more
          </TertiaryHeading>
          <TertiaryHeading>
            declarative
          </TertiaryHeading>
          <PrimaryHeading>
            composition
          </PrimaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes={(
          <div>...fewer concerns, simplifying the language, reducing the risk</div>
        )}>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/register-after.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide bgColor="tertiary" notes={(
          <div>
            By...
            <br/>
            ...through our products
            <br />
            enabling solutions to go further
          </div>
        )}>
          <Heading size={5} fit caps textColor="secondary">
            Encapsulated
          </Heading>
          <Heading size={5} fit caps textColor="secondary">
            principles
          </Heading>
          <Heading size={5} fit caps textColor="primary">
            drive consistency
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            We can do this
          </TertiaryHeading>
          <TertiaryHeading>
            today with
          </TertiaryHeading>
          <PrimaryHeading>
            components
          </PrimaryHeading>
        </Slide>

        <Slide
          bgColor="secondary"
          className="fullsize"
          notes="Need to see them as">
          <Layout style={{ flexWrap: 'wrap', height: '100%' }}>
            <Fill style={{
              backgroundImage: `url(${images.form})`,
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              flexBasis: '40%'
            }} />
            <Fill style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2em',
              flexBasis: '50%'
            }}>
              <TertiaryHeading style={{ fontSize: '3rem', maxWidth: '6em' }}>
                <S type="underline" textColor="primary">More</S> than buttons & fields
              </TertiaryHeading>
            </Fill>
          </Layout>
        </Slide>

        {/*-------------------------*/}
        {/*- Principles not pixels -*/}
        {/*-------------------------*/}
        <Slide bgColor="tertiary" notes={'Instead see them as opportunities to...'}>
          <Heading size={5} fit caps textColor="secondary">
            Capture designer&rsquo;s
          </Heading>
          <Heading size={5} fit caps textColor="primary">
            intent
          </Heading>
          <Heading size={5} fit caps textColor="secondary">
            not solely their output
          </Heading>
        </Slide>

        <Slide bgColor="secondary" notes={(
          <div>
            been on journey to redefine how we collaborate
          </div>
        )}>
          <Image src={images.seek} height="6em" />
        </Slide>

        <Slide bgColor="secondary" notes="breaking down knowledge silos attempting to... ...while enabling the solution to have greater reach">
          <TertiaryHeading>
            Distill design
          </TertiaryHeading>
          <TertiaryHeading>
            knowledge
          </TertiaryHeading>
          <PrimaryHeading>
            into code
          </PrimaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes={"the first step has been...forming the basis of our communication"}>
          <TertiaryHeading>
            Remove pixel
          </TertiaryHeading>
          <PrimaryHeading>
            translation
          </PrimaryHeading>
          <TertiaryHeading>
            layer
          </TertiaryHeading>
        </Slide>

        {/*------------------------*/}
        {/*- ???Bridge missing??? -*/}
        {/*------------------------*/}
{/*
        <Slide bgColor="secondary" notes="Get to the bottom of whats not working">
          <TertiaryHeading>
            Why do we
          </TertiaryHeading>
          <PrimaryHeading>
            pixel nudge<span style={{color: theme.screen.colors.tertiary}}>?</span>
          </PrimaryHeading>
        </Slide>
*/}

        <Slide bgColor="secondary" notes="...all about spacing between elements and text">
          <PrimaryHeading>
            Listen <span style={{color: theme.screen.colors.tertiary}}>to</span>
          </PrimaryHeading>
          <TertiaryHeading>
            your team&rsquo;s
          </TertiaryHeading>
          <TertiaryHeading>
            discussions
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes="so we started with....    It&rsquo;s just text&hellip;">
          <Layout style={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Fill style={{ padding: '0 0.6em', minWidth: '16em', margin: '1em 1em 1em 0' }}>  
              <TertiaryHeading>
                Typography
              </TertiaryHeading>
            </Fill>
            <Fill>
              <CodePane lang="jsx">
                {`<Text>My heading</Text>`}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary" notes="Let's start with a heading">
          <CodePane lang="jsx">
            {`<Text heading>My heading</Text>`}
          </CodePane>
        </Slide>

        <Slide bgColor="secondary" notes="...the only reason we know that">
          <TertiaryHeading>
            Heading:
          </TertiaryHeading>
          <TertiaryHeading>
            <MyCode>21px</MyCode> text over
          </TertiaryHeading>
          <TertiaryHeading>
            <MyCode>27px</MyCode> line height
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} fit caps textColor="secondary">
            Wireframes have
          </Heading>
          <Heading size={3} fit caps textColor="primary">
            trained designers
          </Heading>
          <Heading size={3} fit caps textColor="secondary">
            to translate to pixels
          </Heading>
        </Slide>

        {/*--------------------------*/}
        {/*- Getting behind the pixels--*/}
        {/*--------------------------*/}

        <Slide bgColor="secondary">
          <Heading size={5} lineHeight={1.4} textColor="tertiary">
            <MyCode>font-size: 21px</MyCode>
          </Heading>
        </Slide>

        <Slide bgColor="secondary" notes="...if we werent compiling these to pixels">
          <TertiaryHeading>
            Type hierarchy
          </TertiaryHeading>
          <TertiaryHeading>
            better expressed
          </TertiaryHeading>
          <PrimaryHeading>
            as a scale
          </PrimaryHeading>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {
              `@base-font-size: 10px;
               @heading-scale: 2.1;

               font-size: (@heading-scale * @base-font-size); // 21px
               `.replace(/^               /gm, '')
            }
          </CodePane>
        </Slide>

        <Slide bgColor="secondary" notes="other aspect to our heading definition">
          <Heading size={5} lineHeight={1.4} textColor="tertiary">
            <MyCode>line-height: 27px</MyCode>
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Vertical spacing
          </TertiaryHeading>
          <TertiaryHeading>
            is always a
          </TertiaryHeading>
          <PrimaryHeading>
            factor of rows
          </PrimaryHeading>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {
              `@row-height: 9px;
               @heading-row-span: 3;

               line-height: (@heading-row-span * @row-height); // 27px
               `.replace(/^               /gm, '')
            }
          </CodePane>
        </Slide>

        <Slide bgColor="secondary" notes="Extract the principles">
          <CodePane lang="css">
            {
              `/* Design principles */
               @base-font-size: 10px;
               @row-height: 9px;

               @heading-scale: 2.1;
               @heading-row-span: 3;
               `.replace(/^               /gm, '')
            }
          </CodePane>
        </Slide>
{/*
        <Slide bgColor="secondary">
          <TertiaryHeading>
            Language is forming
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes="Extend to subheading">
          <CodePane lang="jsx">
            {`<Text subheading>My subheading</Heading>`}
          </CodePane>
        </Slide>
*/}
        <Slide bgColor="secondary">
          <TertiaryHeading>
            Heading:
          </TertiaryHeading>
          <TertiaryHeading>
            <MyCode>2.1</MyCode> scale over <MyCode>3</MyCode> rows
          </TertiaryHeading>
        </Slide>
{/*
        <Slide bgColor="secondary" notes="consume in subheading class">
          <CodePane lang="css">
            {
              `// Design principles
               @base-font-size: 10px;
               @row-height: 9px;

               @heading-scale: 2.1;
               @heading-row-span: 3;

               @subheading-scale: 1.8;
               @subheading-row-span: 3;
               `.replace(/^               /gm, '')
            }
          </CodePane>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} fit caps textColor="secondary">
            Extend the language
          </Heading>
          <Heading size={3} fit caps textColor="primary">
            without pixels
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={4} lineHeight={1.4} textColor="tertiary">
            Let&rsquo;s see it
          </Heading>
          <br/>
          <CodePane lang="jsx" textAlign="center">
            {`<Text heading>My heading</Heading>`}
          </CodePane>
        </Slide>
      */}

        <Slide bgColor="secondary">
          <Layout style={{flexWrap: 'wrap'}}>
            <Fill style={{ padding: '0 0.6em' }}>
              <Text margin="1em 0" style={{fontSize: '2rem'}} textColor="primary">
                CSS &ldquo;line-height&rdquo;
              </Text>
              <TextDemo scale={2.1} rows={3}>
                Heading
              </TextDemo>
            </Fill>

            <Fill style={{ padding: '0 0.6em' }}>
              <Text margin="1em 0" style={{fontSize: '2rem'}} textColor="primary">
                Typographic line height
              </Text>
              <TextDemo scale={2.1} rows={3} kick>
                Heading
              </TextDemo>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={5} fit caps textColor="secondary">
            CSS does not
          </Heading>
          <Heading size={5} fit caps textColor="primary">
            speak design
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Layout style={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Fill style={{ padding: '0 0.6em', minWidth: '16em' }}>
              <TertiaryHeading size={4}>
                CSS vertically<br/>
                centres within<br/>
                <MyCode>line-height</MyCode>
              </TertiaryHeading>
            </Fill>
            <Fill style={{ padding: '0 0.6em' }}>
              <TextDemo scale={2.1} rows={3}>
                Heading
              </TextDemo>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <Layout style={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Fill style={{ padding: '0 0.6em' }}>
              <TextDemo scale={2.1} rows={3} kick>
                Heading
              </TextDemo>
            </Fill>
            <Fill style={{ padding: '0 0.6em', minWidth: '16em' }}>
              <TertiaryHeading size={4}>
                In typography<br/>
                line-height <br/>
                is measured
              </TertiaryHeading>
              <PrimaryHeading size={4}>
                from baseline
              </PrimaryHeading>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Additional<br/>
            white space is<br/>
          </TertiaryHeading>
          <PrimaryHeading>
            root cause
          </PrimaryHeading>
          <TertiaryHeading>
            of &ldquo;nudging&rdquo;
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes={'In order to improve the quality of the conversations... Fix it in the component'}>
          <TertiaryHeading>
            Aligning output
          </TertiaryHeading>
          <PrimaryHeading>
            improves quality
          </PrimaryHeading>
          <TertiaryHeading>
            of conversation
          </TertiaryHeading>
        </Slide>

        <Slide
          style={{
            backgroundImage: `linear-gradient(${theme.screen.colors.primary} 50%, ${theme.screen.colors.tertiary} 50%)`
          }}>
          <Layout style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '22em'
          }}>
            <TextDemo scale={2.1} rows={3} highlightDescender>
              Heading
            </TextDemo>
            <div style={{ height: '6.5em' }}>
              <PrimaryHeading textColor="secondary" textAlign="center">
                Height of the descender
              </PrimaryHeading>
              <Text textColor="primary">
                (not available in CSS)
              </Text>
            </div>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <iframe
            style={{border:0}}
            width="500"
            height="306"
            src="https://michaeltaranto.github.io/basekick/pixel-nudge/"
          />
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {`@heading-descender-height: 3px;`}
          </CodePane>
        </Slide>

        <Slide
          style={{
            backgroundImage: `linear-gradient(${theme.screen.colors.primary} 50%, ${theme.screen.colors.tertiary} 50%)`
          }}>
          <Layout style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '22em'
            }}>
            <TextDemo scale={2.1} rows={3} highlightLineHeightDiff>
              Heading
            </TextDemo>
            <div style={{ height: '6.5em' }}>
              <PrimaryHeading textColor="secondary" textAlign="center">
                Difference between
              </PrimaryHeading>
              <Text textColor="secondary">
                <MyCode>line-height</MyCode> & <MyCode>font-size</MyCode>
              </Text>
            </div>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={5} lineHeight={1.4} textColor="tertiary">
            Half the difference betweeen
            <br/>
            line-height & font-size
          </Heading>
          <br />
          <Text lineHeight={1.4} textColor="primary">
            (27px - 21px) ÷ 2 = 3px
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {`@heading-line-height-offset: 3px;`}
          </CodePane>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {`@heading-offset: (@heading-descender-height + @heading-line-height-offset);`}
          </CodePane>
          <CodePane lang="css">
            {`transform: translateY(@heading-offset);`}
          </CodePane>
        </Slide>

        <Slide bgColor="secondary">
          <div style={{maxWidth: '20em', margin: '0 auto'}}>
            <TextDemo scale={2.1} rows={3} kick>
              Heading
            </TextDemo>
          </div>
        </Slide>

        <Slide bgColor="secondary">
          <List>
            <ListItem>
              <Text textColor="tertiary">— Transform doesn&rsquo;t push neighbours</Text>
            </ListItem>
            <Appear>
              <ListItem>
                <Text textColor="tertiary">— Preserves white space CSS properties</Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary" notes="Do we really need to calculate the offeset again">
          <TertiaryHeading>
            What about subheadings?
          </TertiaryHeading>
        </Slide>

        {/*--------------------------------*/}
        {/*- Creating a scalable solution -*/}
        {/*--------------------------------*/}
        <Slide bgColor="secondary" notes="and share it between elements">
          <TertiaryHeading>
            Descender as a scale
            using <MyCode>em</MyCode> units
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary">
          <iframe
            style={{border:0}}
            width="500"
            height="306"
            src="https://michaeltaranto.github.io/basekick/scale-nudge/"
          />
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {`@roboto-descender-scale: 0.15; // 15%`}
          </CodePane>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Transform text<br/>as a scale?
          </TertiaryHeading>
        </Slide>

        <Slide
          style={{
            backgroundImage: `linear-gradient(${theme.screen.colors.secondary} 50%, ${theme.screen.colors.tertiary} 50%)`
          }}>
          <Layout style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '22em'
            }}>
            <div>
              <Heading size={3} lineHeight={1.4} textColor="primary">
                Basekick
              </Heading>
              <Layout style={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', maxWidth: '25em' }}>
                <Image src={images.github} style={{ margin: '0 .5em', height: '53px', width: '50px'}} />
                <Link
                  textColor="tertiary"
                  lineHeight={4}
                  style={{ margin: '0 .5em', fontSize: '1.5rem'}}
                  href="https://github.com/michaeltaranto/basekick">
                  github.com/michaeltaranto/basekick
                </Link>
              </Layout>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '10em',
              width: '100%'
            }}>
              <Heading size={3} lineHeight={0.8} fit caps textColor="primary">
                Translate design principles
              </Heading>
              <Heading size={3} lineHeight={0.8} fit caps textColor="secondary">
                into CSS rules to align type
              </Heading>
            </div>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="css">
            {
              `.heading {
                 .basekick(
                   @heading-scale,
                   @roboto-descender-scale,
                   @heading-row-span,
                   @row-height,
                   @base-font-size
                 );
               }
               `.replace(/^               /gm, '')
            }
          </CodePane>
        </Slide>

        <Slide bgColor="secondary" notes="...no additional work for designers to do upfront">
          <Layout style={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Fill>
              <CodePane lang="css">
                {
                  `.heading {
                    font-size: 21px;
                    line-height: 27px;
                    transform: translateY(.27935714em);
                  }
                  `.replace(/^                  /gm, '')
                }
              </CodePane>
            </Fill>
            <Fill style={{ padding: '1em' }}>
              <PrimaryHeading>
                Calculated properties<span style={{ color: theme.screen.colors.tertiary }}>,&nbsp;</span>
              </PrimaryHeading>
              <TertiaryHeading>
                no more translations
              </TertiaryHeading>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Subheading:
          </TertiaryHeading>
          <TertiaryHeading>
            <MyCode>1.8</MyCode> scale over <MyCode>3</MyCode> rows
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Standard:
          </TertiaryHeading>
          <TertiaryHeading>
            <MyCode>1.4</MyCode> scale over <MyCode>2</MyCode> rows
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} fit caps textColor="primary">
            Talk in principles
          </Heading>
          <Heading size={3} fit textColor="secondary">
            and compile to pixels
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <iframe
            style={{border:0}}
            width="500"
            height="306"
            src="https://michaeltaranto.github.io/basekick/playground/"
          />
        </Slide>

        <Slide
          bgColor="secondary"
          className="fullsize"
          notes="by encapsulating complexity... while saving the designers a lot of time specing">
          <Layout style={{ flexWrap: 'wrap', height: '100%' }}>
            <Fill style={{
              backgroundImage: `url(${images.markedup})`,
              backgroundPosition: 'top right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              flexBasis: '40%'
            }} />
            <Fill style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2em',
              flexBasis: '50%'
            }}>
              <div>
                <PrimaryHeading style={{ fontSize: '3rem' }}>
                  Reduce time
                </PrimaryHeading>
                <TertiaryHeading style={{ fontSize: '3rem' }}>
                  spec&rsquo;ing<br/>
                  and nudging
                </TertiaryHeading>
              </div>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane lang="html">
            {
              `<Card>
                <Text heading>Register</Text>
                <Text subheading>
                  It&rsquo;ll be be awesome, you know you want to!
                </Text>
               </Card>
               `.replace(/^               /gm, '')
            }
          </CodePane>
        </Slide>

        <Slide bgColor="secondary">
          <div style={{maxWidth: '600px', margin: '0 auto'}}>
            <Baseline lineHeight={rowHeight * 2} type="bar" color="rgba(0, 0, 0, 0.08)">
              <Card style={{height: '65vh', maxHeight: '18em', padding: '0 40px'}}>
                <BasekickText
                  typeSizeModifier={2.1}
                  descenderHeightScale={0.15}
                  typeRowSpan={3}
                  gridRowHeight={rowHeight * 2}
                  baseFontSize={baseFontSize * 2}
                  on={true}>
                  Register
                </BasekickText>
                <BasekickText
                  typeSizeModifier={1.8}
                  descenderHeightScale={0.15}
                  typeRowSpan={3}
                  gridRowHeight={rowHeight * 2}
                  baseFontSize={baseFontSize * 2}
                  on={true}>
                  It&rsquo;ll be be awesome, you know you want to!
                </BasekickText>
              </Card>
            </Baseline>
          </div>
        </Slide>

        {/*-----------------------------------------*/}
        {/*- Component API is your design language -*/}
        {/*-----------------------------------------
        <Slide bgColor="secondary">
          <TertiaryHeading>
            Language
          </TertiaryHeading>
          <PrimaryHeading>
            growing
          </PrimaryHeading>
          <TertiaryHeading>
            from code
          </TertiaryHeading>
        </Slide>*/}

        <Slide bgColor="tertiary" notes={(
          <div>
            Defining the api is critical
            <br/><br/>
            Beware of the temptations
          </div>
        )}>
          <Heading size={5} fit caps textColor="secondary">
            Component interface becomes
          </Heading>
          <Heading size={5} fit caps textColor="primary">
            your design language
          </Heading>
        </Slide>

        <Slide bgColor="secondary" notes="but what you quickly realise">
          <Layout style={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <Fit style={{ padding: '1.5em 0' }}>
              <CodePane lang="jsx">
                {`<Text green>
                    You&rsquo;ve successfully registered
                  </Text>
                  `.replace(/^                  /gm, '')
                }
              </CodePane>
            </Fit>
            <Fill style={{ minWidth: '18em' }}>
              <BlockQuote>
                <Quote>Can you make that text green?</Quote>
                <Cite>Always someone</Cite>
              </BlockQuote>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary" notes="The desired end state">
          <Heading size={5} lineHeight={1.4} textColor="tertiary">
            &ldquo;green&rdquo; is to <MyCode>color</MyCode> what
            <br/>
            &ldquo;pixels&rdquo; were to <MyCode>font-size</MyCode>
          </Heading>
        </Slide>

        <Slide bgColor="secondary" notes="Finding the &ldquo;why&rdquo; for everything">
          <PrimaryHeading>
            Challenge
          </PrimaryHeading>
          <TertiaryHeading>
            to discover
          </TertiaryHeading>
          <TertiaryHeading>
            the intent
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary" notes="convey the tone of the message">
          <Layout style={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <Fill style={{ padding: '1.5em 0' }}>
              <TertiaryHeading textAlign="center">
                Tone
              </TertiaryHeading>
            </Fill>
            <Fill>
              <CodePane lang="jsx">
                {`<Text positive>
                    You&rsquo;ve successfully registered
                  </Text>
                  `.replace(/^                  /gm, '')
                }
              </CodePane>
              <Appear>
                <Text textColor="primary" margin="1.5em 0 -3.5em">
                  Future proof the language
                </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="tertiary" notes="Solution has broader reach">
          <Heading size={5} fit caps textColor="secondary">
            Encourages
          </Heading>
          <Heading size={5} fit caps textColor="secondary">
            design
          </Heading>
          <Heading size={5} fit caps textColor="primary">
            conversations
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <TertiaryHeading>
            Is pixel
          </TertiaryHeading>
          <PrimaryHeading>
            perfect
          </PrimaryHeading>
          <TertiaryHeading>
            really<br/>necessary?
          </TertiaryHeading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textColor="tertiary" textAlign="left">
            — Confidence
          </Heading>
          <br/>
          <Appear style={{whiteSpace: 'nowrap'}}>
            <Heading textColor="tertiary" textAlign="left">
              — Efficiency
            </Heading>
          </Appear>
          <br/>
          <Appear style={{whiteSpace: 'nowrap'}}>
            <Heading textColor="tertiary" textAlign="left">
              — Consistency
            </Heading>
          </Appear>
        </Slide>

        {/*---------------------*/}
        {/*- Where are we now? -*/}
        {/*---------------------*/}
        <Slide bgColor="secondary">
          <Layout style={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Fill>
              <TertiaryHeading>
                Where are we now?
              </TertiaryHeading>
            </Fill>
            <Fill>
              <CodePane lang="jsx">
                {`<Text />
                  <Strong />
                  <Card />
                  <Section />
                  <PageBlock />
                  <Loader />
                  <Icon />
                  <Button />
                  <TextField />
                  <MonthPicker />
                  <PasswordField />
                  &hellip;
                  `.replace(/^                  /gm, '')
                }
              </CodePane>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary"
          bgImage={images.seekHome}
          bgDarken={0.8}
          bgRepeat="repeat,no-repeat"
          bgPosition="center top"
          className="fullsize"
          notes={(
            <div>
              delivered by mutiple teams
              <br/><br/>
              capturing as code allows sharing across teams
            </div>
          )}>
          <iframe
            src="https://www.seek.com.au"
            height="100%"
            width="100%"
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }}
          />
        </Slide>

        <Slide
          bgColor="secondary"
          className="fullsize">
          <Layout style={{ flexWrap: 'wrap', height: '100%' }}>
            <Fill style={{
              backgroundColor: theme.screen.colors.tertiary,
              flexBasis: '40%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <PrimaryHeading textAlign="center" style={{ fontSize: '3rem' }}>
                What&rsquo;s worked
              </PrimaryHeading>
            </Fill>
            <Fill style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '1em',
              flexBasis: '60%'
            }}>
              <TertiaryHeading style={{ fontSize: '2rem' }}>— Components everywhere</TertiaryHeading>
              <br/>
              <TertiaryHeading style={{ fontSize: '2rem' }}>— Cross-discipline pairing</TertiaryHeading>
            </Fill>
          </Layout>
        </Slide>

        {/* <Slide
          style={{
            backgroundImage: `linear-gradient(90deg, ${theme.screen.colors.tertiary} 40%, ${theme.screen.colors.secondary} 40%)`
          }}>
          <Layout style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '0px -4.5em 0px -12em'
            }}>
            <Fill>
              <PrimaryHeading>
                What&rsquo;s worked
              </PrimaryHeading>
            </Fill>
            <Fill>
              <Text textColor="tertiary" textAlign="left" style={{whiteSpace:'nowrap'}}>— Components everywhere</Text>
              <br/>
              <Appear style={{whiteSpace: 'nowrap'}}>
                <Text textColor="tertiary" textAlign="left" style={{whiteSpace: 'nowrap'}}>— Cross-discipline pairing</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide> */}

        <Slide
          bgColor="secondary"
          className="fullsize">
          <Layout style={{ flexWrap: 'wrap', height: '100%' }}>
            <Fill style={{
              backgroundColor: theme.screen.colors.tertiary,
              flexBasis: '40%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <PrimaryHeading textAlign="center" style={{ fontSize: '3rem' }}>
                What takes work
              </PrimaryHeading>
            </Fill>
            <Fill style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '1em',
              flexBasis: '60%'
            }}>
              <TertiaryHeading style={{ fontSize: '2rem' }}>— Naming is hard</TertiaryHeading>
              <br/>
              <TertiaryHeading style={{ fontSize: '2rem' }}>— Justifying the &ldquo;why&rdquo;</TertiaryHeading>
            </Fill>
          </Layout>
        </Slide>

        {/* <Slide
          style={{
            backgroundImage: `linear-gradient(90deg, ${theme.screen.colors.tertiary} 40%, ${theme.screen.colors.secondary} 40%)`
          }}>
          <Layout style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '0px -4.5em 0px -13em'
            }}>
            <Fill>
              <PrimaryHeading>
                What takes work
              </PrimaryHeading>
            </Fill>
            <Fill>
              <Text textColor="tertiary" textAlign="left" style={{whiteSpace:'nowrap'}}>— Naming is hard</Text>
              <br/>
              <Appear style={{whiteSpace: 'nowrap'}}>
                <Text textColor="tertiary" textAlign="left" style={{whiteSpace: 'nowrap'}}>— Justifying the &ldquo;why&rdquo;</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide> */}

        <Slide bgColor="secondary"
          bgImage={images.styleGuide}
          bgDarken={0.70}
          bgRepeat="repeat,no-repeat"
          bgPosition="center top">
          <Heading size={5} lineHeight={1.4} textColor="primary">
            Follow our journey
          </Heading>

          <Layout style={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={images.github} style={{ margin: '0.5em', width: '2em'}} />
            <Link
              textColor="tertiary"
              lineHeight={4}
              style={{ margin: '0 0.5em', fontSize: '1.5rem'}}
              href="https://seek-oss.github.io/seek-style-guide">
              seek-oss.github.io/seek-style-guide
            </Link>
          </Layout>
        </Slide>

        <Slide bgColor="tertiary" notes={(
          <div>
            Inspired
            <br /><br />
            Reflect on how you collaborate
            <br /><br />
            Deliver better experiences
          </div>
        )}>
          <Heading size={5} fit caps textColor="secondary">
            Help define
          </Heading>
          <Heading size={5} fit caps textColor="primary">
            your team&rsquo;s
          </Heading>
          <Heading size={5} fit caps textColor="secondary">
            design language
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Avatar />
          <br/>
          <Heading size={5} lineHeight={1.4} textColor="primary">
            Thank you
          </Heading>
          <br/>
          <div style={{textAlign: 'left', display: 'inline-block', margin: '0 auto'}}>
            <Text lineHeight={1.4} style={{display: 'flex', alignItems:'center', marginBottom: '10px'}}>
              <Image src={images.twitter} style={{ margin: '0 0.5em 0 0', width: '1em'}} />
              <Link style={{fontSize: '1.5rem'}} textColor="tertiary" href="https://twitter.com/michaeltaranto">@michaeltaranto</Link>
            </Text>
            <Text lineHeight={1.4} style={{display: 'flex', alignItems:'center', marginBottom: '10px'}}>
              <Image src={images.github} style={{ margin: '0 0.5em 0 0', width: '1em'}} />
              <Link style={{fontSize: '1.5rem'}} textColor="tertiary" href="https://github.com/michaeltaranto">github.com/michaeltaranto</Link>
            </Text>
            <Text lineHeight={1.4} style={{display: 'flex', alignItems:'center', marginBottom: '10px'}}>
              <Image src={images.github} style={{ margin: '0 0.5em 0 0', width: '1em'}} />
              <Link style={{fontSize: '1.5rem'}} textColor="tertiary" href="https://github.com/michaeltaranto/basekick">github.com/michaeltaranto/basekick</Link>
            </Text>
            <Text lineHeight={1.4} style={{display: 'flex', alignItems:'center'}}>
              <Image src={images.github} style={{ margin: '0 0.5em 0 0', width: '1em'}} />
              <Link style={{fontSize: '1.5rem'}} textColor="tertiary" href="https://seek-oss.github.io/seek-style-guide">seek-oss.github.io/seek-style-guide</Link>
            </Text>
          </div>
        </Slide>
      </Deck>
    );
  }
}
