import React from 'react'

export default function Box({
    children, onClick,
    marginRight, marginLeft, marginTop, marginBottom, marginHorizontal, marginVertical,
    paddingRight, paddingLeft, paddingTop, paddingBottom, paddingHorizontal, paddingVertical,
    display, flex,
    absolute, z, top, left,bottom, right,
    height, width,
}) {
    return (
        <div
            style={[
                {display: 'block'},

                display ? {display: display} : {display: 'block'},

                marginTop ? {marginTop: marginTop} : '',
                marginBottom ? {marginBottom: marginBottom} : '',
                marginLeft ? {marginLeft: marginLeft} : '',
                marginRight ? {marginRight: marginRight} : '',
                marginHorizontal ? {marginHorizontal: marginHorizontal} : '',
                marginVertical ? {marginVertical: marginVertical} : '',

                paddingTop ? {paddingTop: paddingTop} : '',
                paddingBottom ? {paddingBottom: paddingBottom} : '',
                paddingLeft ? {paddingLeft: paddingLeft} : '',
                paddingRight ? {paddingRight: paddingRight} : '',
                paddingHorizontal ? {paddingHorizontal: paddingHorizontal} : '',
                paddingVertical ? {paddingVertical: paddingVertical} : '',

                absolute ? {position: "absolute"} : '',
                z ? {zIndex: z} : '',
                top ? {top: top} : '',
                left ? {left: left} : '',
                right ? {right: right} : '',
                bottom || bottom == 0 ? {bottom: bottom} : '',

                height ? {height: height} : '',
                width ? {width: width} : '',
            ]}
            onClick={onClick}
            >
            {children}
        </div>
    )
}
