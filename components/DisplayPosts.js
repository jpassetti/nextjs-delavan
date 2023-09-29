import { Fragment } from 'react'

import classNames from 'classnames/bind'

import styles from './displayposts.module.scss'

import Button from './Button'
import Card from './Card'
import Col from './Col'
import Grid from './Grid'
import Heading from './Heading'
import Icon from './Icon'
import Link from 'next/link'
import Paragraph from './Paragraph'
import Row from './Row'
import Router from 'next/router'
import Section from './Section'



let cx = classNames.bind(styles)

const DisplayPosts = ({
   posts,
   categories,
   withCategorySections
}) => {
    return <Section borderTop={1} paddingTop={2}> 
    {
    withCategorySections ? 
        categories.map((category, index) => {
            const {name, slug} = category.node;
            return <Fragment key={`category${index}`}>
                <Section.Header>
                    <Icon.Accessory iconSlug={slug} />
                    <Heading level={2} color="black" textTransform="uppercase" size="small">{name}</Heading>
                    </Section.Header>
                    <Grid posts={posts} />
             </Fragment>
        })
    : 
        <Grid posts={posts} />
    }          
    </Section>
}
export default DisplayPosts;