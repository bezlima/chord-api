function BaseUrlCifraClub(artist:string, music:string, complemente:string) {

    const formattedArtist = artist.replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const formattedMusic = music.replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return `https://www.cifraclub.com.br/${formattedArtist}/${formattedMusic}/${complemente}`
}

module.exports = { BaseUrlCifraClub }