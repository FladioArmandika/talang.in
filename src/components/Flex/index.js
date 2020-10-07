import React from 'react'

export default function Flex({
    parent, style, children,
    horizontal, vertical,
    spacebetween, spacearound, center, 
    alignItems, alignContent, alignSelf,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
    paddingVertical, paddingHorizontal, paddingStart, 
    paddingEnd, padding,
    marginTop, marginBottom, marginLeft, marginRight,
    marginVertical, marginHorizontal, marginStart,
    marginEnd, margin,
    justifyContent,
}) {
    return (
        <div style={[
            {display: 'flex',},
            horizontal ? {flexDirection: 'row'} : '',
            vertical ? {flexDirection: 'column'}  : '',
            spacebetween ? {justifyContent: 'space-between'} : '',
            spacearound ? {justifyContent: 'space-around'}  : '',
            center ? {justifyContent: 'center'} : '', 
            alignItems ? {alignItems: alignItems} : '',
            alignContent ? {alignContent: alignContent} : '',
            alignSelf ? {alignSelf: alignSelf} : '',
            justifyContent ? {justifyContent: justifyContent} : '',
            parent ? {flex: 0} : {flex: 1},
            style,
            paddingTop ? {paddingTop: paddingTop} : '',
            paddingBottom ? {paddingBottom: paddingBottom} : '',
            paddingLeft ? {paddingLeft: paddingLeft} : '',
            paddingRight ? {paddingRight: paddingRight} : '',
            paddingVertical ? {paddingVertical: paddingVertical} : '',
            paddingHorizontal ? {paddingHorizontal: paddingHorizontal} : '',
            paddingStart ? {paddingStart: paddingStart} : '',
            paddingEnd ? {paddingEnd: paddingEnd} : '',
            padding ? {padding: padding} : '',

            marginTop ? {marginTop: marginTop} : '',
            marginBottom ? {marginBottom: marginBottom} : '',
            marginLeft ? {marginLeft: marginLeft} : '',
            marginRight ? {marginRight: marginRight} : '',
            marginVertical ? {marginVertical: marginVertical} : '',
            marginHorizontal ? {marginHorizontal: marginHorizontal} : '',
            marginStart ? {marginStart: marginStart} : '',
            marginEnd ? {marginEnd: marginEnd} : '',
            margin ? {margin: margin} : '',
        ]}>
            
        </div>
    )
}
