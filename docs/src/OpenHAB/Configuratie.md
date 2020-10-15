# Configuratie

![Home](./home.png)
![Kamer](./kamer.png)
![Living](./living.png)


## Items
``` Java
Switch Desk_light_switch  "Lichten bureau schakelaar"  <switch>  (gR, Lights)  ["bureau_kamer"]
Dimmer Desk_light_dimmer  "Lichten bureau dimmer"  <lightbulb>  (gR)  ["bureau_kamer"]
```

## Groups

``` Java
Group gLR           "Living"        <living>        ["living"]
Group gR            "Kamer"         <kamer>         ["kamer"]

Group:Switch:OR(ON, OFF)        Lights      "All Lights [(%d)]"
```

## Sitemap
``` Java
sitemap demo label="Gustaaf Callierlaan"
{
	Frame {
		Text item=gLR icon="groundfloor" {
			Frame label="Sonos" {
				Slider item=Sonos_volume_dimmer label="Volume"
				Switch item=Sonos_toggle_mute label="Mute"
				Default item=Sonos_player
				Text item=sonos_SYMFONISK_RINCON_347E5CF9077201400_currenttitle label="Nummer" icon="none"
				Text item=sonos_SYMFONISK_RINCON_347E5CF9077201400_currentartist label="Artiest" icon="none"
				Text item=sonos_SYMFONISK_RINCON_347E5CF9077201400_currentalbum label="Album" icon="none"
			}
			Frame label="Beamer" {
				Slider item=Beamer_volume_dimmer label="Volume"
				Switch item=Beamer_toggle_mute label="Mute"
				Default item=Beamer_player

			}
		}
		Text item=gR icon="bedroom" {
			Frame label="Alle lichten" {
				Switch item=Lights label="Alle lichten" mappings=[ON="On", OFF='Off']
			}
			Frame label="Bureau"{
				Switch item=Desk_light_switch label="Bureau schakelaar"
				Slider item=Desk_light_dimmer label="Bureau dimmer"
			}
			Frame label="Bed"{
				Switch item=Bed_light_switch label="Bed schakelaar"
				Slider item=Bed_light_dimmer label="Bed dimmer"
			}
			Frame label="Plafond"{
				Switch item=Ceiling_light_switch label="Plafond schakelaar"
				Slider item=Ceiling_light_dimmer label="Plafond dimmer"
				Text label="Lichten plafond" icon="lightbulb" {
					Slider item=Ceiling_light1_dimmer label="Plafond center dimmer"
					Slider item=Ceiling_light2_dimmer label="Plafond bureau dimmer"
					Slider item=Ceiling_light3_dimmer label="Plafond bed dimmer"
				}
			}
		}
	}
}
```

## Configuratie
 ``` Java
// A comma-separated list of bindings to install (e.g. "binding = sonos,knx,zwave")
binding = tradfri , sonos , amazonechocontrol , chromecast , buienradar
 ```