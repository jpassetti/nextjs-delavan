import { Fragment } from 'react'

import classNames from 'classnames/bind'

import styles from './displayposts.module.scss'

import Button from './Button'
import Card from './Card'
import Col from './Col'
import Heading from './Heading'
import Icon from './Icon'
import Link from 'next/link'
import Paragraph from './Paragraph'
import Row from './Row'
import Router from 'next/router'
import Section from './Section'



let cx = classNames.bind(styles)

const DisplayPosts = ({
    categoryIcon,
    categorySlug,
    displayFormat,
    posts,
    parentSlug,
    displayCategory,
    sectionTitle
}) => {
    let displayClasses = cx({
        ['grid']: displayFormat === "grid",
        ['list']: displayFormat === "list"
    });
    return <Section borderTop={1} paddingTop={2}>
        {displayFormat === "grid" ? 
            <Fragment>
                <Section.Header>
                    <Icon.Accessory iconPath={categoryIcon} iconSlug={categorySlug} />
                    <Heading level="2" color="black" textTransform="uppercase" size="small">{sectionTitle}</Heading>
                 </Section.Header>
                 <div className={displayClasses}>
                    {posts.length > 0 ? posts.map((edge, index) => {
                        const {title, slug, excerpt, categories, creativeTypes, featuredImage } = edge.node;
                        const formattedSlug = `${parentSlug ? parentSlug : ''}/${slug}`;
                        return <Card 
                            key={index} 
                            title={title} 
                            slug={formattedSlug}
                            categorySlug={categorySlug}
                            //categories={creativeTypes ? creativeTypes : categories} 
                            backgroundImage={featuredImage?.node.sourceUrl}
                            clickHandler={(e) => {
                                e.preventDefault()
                                Router.push(formattedSlug)
                            }} 
                        /> 
                    })
                    :
                    <Paragraph>No creatives match this category yet.</Paragraph>
                    }
                </div>
            </Fragment>
        : displayFormat === "list" ?
        <Fragment>
            <Row alignItems="top">
            <Col sm="6">
                <Section.Header>
                    <Icon.Accessory iconPath={categoryIcon} iconSlug={categorySlug} />
                    <Heading level="2" textTransform="uppercase" size="small" color="black">{sectionTitle}</Heading>
                 </Section.Header>
            </Col>
            <Col sm="6">
            {posts.length > 0 ? posts.map((edge, index) => {
                    const {title, slug } = edge.node;
                    return <Row 
                    key={index} 
                    justifyContent="space-between" 
                    alignItems="center"
                    borderBottom="1" 
                    paddingTop="1" 
                    paddingBottom="1"
                    >
                    {title && 
                        <Heading 
                            level="3" 
                            color="black"
                        >
                            <Link 
                                href={`${parentSlug ? parentSlug : ''}/${slug}`}
                            >
                                {title}
                            </Link>
                        </Heading>
                    }
                        <Button 
                            backgroundColor={categorySlug} 
                            iconAfter="angle-right" 
                            shape="circle" 
                            size="small"
                            url={`${parentSlug ? parentSlug : ''}/${slug}`} 
                        />
                    </Row>
                })
                :
                <Paragraph>No creatives match this category yet.</Paragraph>
                }
            </Col>
        </Row>
        </Fragment>
        : <Paragraph>No items in this category.</Paragraph>
        }
    </Section>
}
export default DisplayPosts;