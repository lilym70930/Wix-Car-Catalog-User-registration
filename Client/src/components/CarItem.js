import React from 'react';
import CarItemStyle from '../style/CarItemStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 445,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const CarItem = ({ car }) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        LM
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={car.type}
                subheader="The car of your dreams"
            />
            <CardMedia
                className={classes.media}
                image={car.img}
                model={car.type}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span> Year  : <strong>{car.year}</strong></span> <br></br>
                    <span>Color : <strong>{car.color}</strong></span><br></br>
                    <span> Price : <strong>{car.price}</strong></span><br></br>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>We make your dreams come true</Typography>
                    <Typography paragraph>
                        {car.type} .. The car of your dreams! <br></br>
           *** CRAZY SALE ONLY FOR TODAY!!! *** <br></br>
           BUY IT NOW!!
          </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default CarItem;

















