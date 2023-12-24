// WordPress dependencies
const { __ } = wp.i18n;

// Animation options
export const animations  = [
    {
        "value": "bounce",
        "label": "Bounce"
    },
    {
        "value": "bounceIn",
        "label": "Bounce in"
    },
    {
        "value": "bounceInDown",
        "label": "Bounce in down"
    },
    {
        "value": "bounceInLeft",
        "label": "Bounce in left"
    },
    {
        "value": "bounceInRight",
        "label": "Bounce in right"
    },
    {
        "value": "bounceInUp",
        "label": "Bounce in up"
    },
    {
        "value": "bounceOut",
        "label": "Bounce out"
    },
    {
        "value": "bounceOutDown",
        "label": "Bounce out down"
    },
    {
        "value": "bounceOutLeft",
        "label": "Bounce out left"
    },
    {
        "value": "bounceOutRight",
        "label": "Bounce out right"
    },
    {
        "value": "bounceOutUp",
        "label": "Bounce out up"
    },
    {
        "value": "fadeIn",
        "label": "Fade in"
    },
    {
        "value": "fadeInDown",
        "label": "Fade in down"
    },
    {
        "value": "fadeInDownBig",
        "label": "Fade in down big"
    },
    {
        "value": "fadeInLeft",
        "label": "Fade in left"
    },
    {
        "value": "fadeInLeftBig",
        "label": "Fade in left big"
    },
    {
        "value": "fadeInRight",
        "label": "Fade in right"
    },
    {
        "value": "fadeInRightBig",
        "label": "Fade in right big"
    },
    {
        "value": "fadeInUp",
        "label": "Fade in up"
    },
    {
        "value": "fadeInUpBig",
        "label": "Fade in up big"
    },
    {
        "value": "fadeOut",
        "label": "Fade Out"
    },
    {
        "value": "fadeOutDown",
        "label": "Fade out down"
    },
    {
        "value": "fadeOutDownBig",
        "label": "Fade out down big"
    },
    {
        "value": "fadeOutLeft",
        "label": "Fade out left"
    },
    {
        "value": "fadeOutLeftBig",
        "label": "Fade out left big"
    },
    {
        "value": "fadeOutRight",
        "label": "Fade out right"
    },
    {
        "value": "fadeOutRightBig",
        "label": "Fade out right big"
    },
    {
        "value": "fadeOutUp",
        "label": "Fade out up"
    },
    {
        "value": "fadeOutUpBig",
        "label": "Fade out up big"
    },
    {
        "value": "flash",
        "label": "Flash"
    },
    {
        "value": "flipInX",
        "label": "Flip in X"
    },
    {
        "value": "flipInY",
        "label": "Flip in Y"
    },
    {
        "value": "flipOutX",
        "label": "Flip out X"
    },
    {
        "value": "flipOutY",
        "label": "Flip out Y"
    },
    {
        "value": "headShake",
        "label": "Head shake"
    },
    {
        "value": "hinge",
        "label": "Hinge"
    },
    {
        "value": "jackInTheBox",
        "label": "Jack in the box"
    },
    {
        "value": "jello",
        "label": "Jello"
    },
    {
        "value": "lightSpeedIn",
        "label": "Light speed in"
    },
    {
        "value": "lightSpeedOut",
        "label": "Light speed out"
    },
    {
        "value": "pulse",
        "label": "Pulse"
    },
    {
        "value": "rollIn",
        "label": "Roll in"
    },
    {
        "value": "rollOut",
        "label": "Roll out"
    },
    {
        "value": "rotateIn",
        "label": "Rotate In"
    },
    {
        "value": "rotateInDownLeft",
        "label": "Rotate in down left"
    },
    {
        "value": "rotateInDownRight",
        "label": "Rotate in down right"
    },
    {
        "value": "rotateInUpLeft",
        "label": "Rotate in Up left"
    },
    {
        "value": "rotateInUpRight",
        "label": "Rotate in Up right"
    },
    {
        "value": "rotateOut",
        "label": "Rotate out"
    },
    {
        "value": "rotateOutDownLeft",
        "label": "Rotate out down left"
    },
    {
        "value": "rotateOutDownRight",
        "label": "Rotate out down right"
    },
    {
        "value": "rotateOutUpLeft",
        "label": "Rotate out up left"
    },
    {
        "value": "rotateOutUpRight",
        "label": "Rotate out up right"
    },
    {
        "value": "rubberBand",
        "label": "Rubber band"
    },
    {
        "value": "shake",
        "label": "Shake"
    },
    {
        "value": "slideInDown",
        "label": "Slide in down"
    },
    {
        "value": "slideInLeft",
        "label": "Slide in left"
    },
    {
        "value": "slideInRight",
        "label": "Slide in right"
    },
    {
        "value": "slideInUp",
        "label": "Slide in up"
    },
    {
        "value": "slideOutDown",
        "label": "Slide out down"
    },
    {
        "value": "slideOutLeft",
        "label": "Slide out left"
    },
    {
        "value": "slideOutRight",
        "label": "Slide out right"
    },
    {
        "value": "slideOutUp",
        "label": "Slide out up"
    },
    {
        "value": "swing",
        "label": "Swing"
    },
    {
        "value": "tada",
        "label": "Tada"
    },
    {
        "value": "wobble",
        "label": "Wobble"
    },
    {
        "value": "zoomIn",
        "label": "Zoom in"
    },
    {
        "value": "zoomInDown",
        "label": "Zoom in down"
    },
    {
        "value": "zoomInLeft",
        "label": "Zoom in left"
    },
    {
        "value": "zoomInRight",
        "label": "Zoom in right"
    },
    {
        "value": "zoomInUp",
        "label": "Zoom in up"
    },
    {
        "value": "zoomOut",
        "label": "Zoom out"
    },
    {
        "value": "zoomOutDown",
        "label": "Zoom out down"
    },
    {
        "value": "zoomOutLeft",
        "label": "Zoom out left"
    },
    {
        "value": "zoomOutRight",
        "label": "Zoom out right"
    },
    {
        "value": "zoomOutUp",
        "label": "Zoom out up"
    }
]

export default { animations }
