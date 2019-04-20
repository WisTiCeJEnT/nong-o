import React, {
  memo,
} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import yellow from '@material-ui/core/colors/yellow';

import benefits from 'data/benefits';

const styles = theme => {
  const bannerBackground = yellow[100];
  const benefitsBackground = 'rgba(0, 0, 0, 0.75)';

  return {
    banner: {
      height: 'calc(100vh - 64px)',
      backgroundColor: bannerBackground,
      color: theme.palette.getContrastText(bannerBackground),
    },
    bannerContentContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    benefits: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 300,
      backgroundColor: benefitsBackground,
      color: theme.palette.getContrastText(benefitsBackground),
    },
    benefit: {
      padding: theme.spacing.unit * 2,
    },
  }
};

const ipsum = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'

const Banner = memo((props) => {
  const { classes } = props;

  return (
    <div className={classes.banner}>
      <div className={`${classes.bannerContentContainer} container`}>
        <div>
          <Typography variant="h3" color="inherit">
            ทำไมต้องคุยกับน้องโอ ?
          </Typography>
        </div>
        <Grid container style={{ marginTop: 48 }} className={classes.benefits} justify="center">
          {
            benefits.map(benefit => (
              <Grid item md={6} sm={6} className={classes.benefit} key={benefit}>
                <Typography variant="h5" color="inherit" align="center">
                  {benefit || ipsum}
                </Typography>
              </Grid>
            ))
          }
        </Grid>
        <div style={{ marginTop: 48 }}>
          <Button variant="contained" color="primary" size="large">
            คุยกับน้องโอเลยสิ!
          </Button>
        </div>
      </div>
    </div>
  );
});

export default withStyles(styles)(Banner);
