import {FaCheck, FaArchive} from "react-icons/fa"
import {Grid, CardMedia, CardContent, CardActions, Typography, Tooltip, Card, Button, IconButton} from "@mui/material"
import Cards from "../json/project-cards.json"

function ProjectCards() {
    return(
        <Grid container  flexDirection={'row'} justifyContent={"space-evenly"} alignItems={'center'} spacing={3} >
          {Cards.cards.map((card) =>
            <Grid item>
            <Card className="project-card" sx={{maxWidth: 290}}>
              <CardMedia 
              image={require("../img/" + card.img)}
              component="img"
              height={160}/>
              <CardContent>
              <Typography variant='h5' component="div" gutterbottom="true">
                {card.name}<Tooltip title={card.state ? "Active" : "Archived"}>
                  <IconButton>
                    {card.state ? <FaCheck size={14}/> : <FaArchive size={14}/>}
                  </IconButton>
                </Tooltip>
              </Typography>
              <Typography variant="body2" color="text.secondary">{card.discription}</Typography>
              </CardContent>
              <CardActions>
                {card.links.map((link) => 
                  <Button size="small" color="primary" href={link["link-href"]}>
                    {link["link-name"]}
                  </Button>
                )}
              </CardActions>
            </Card>
            </Grid>
          )}
        </Grid>
    )
}

export default ProjectCards;