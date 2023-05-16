export function formatPokemonsName (name : string) : string {
    if (name.includes("♀")) {
        return name.replace("♀", "-f");
    }else if (name.includes("♂")) {
        return name.replace("♂", "-m");
    }else if (name.includes(" jr.")){
        return name.replace("-jr.","-" );
    }else if (name.includes(". ")){
        return name.replace(". ", "-");
    } else if (name.includes("Mime Jr.")) {
        return name.replace("mime-jr.", "-");
    }else if (name.toLocaleLowerCase().includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd" );
    }else {
        return name;
    }
}

export function waitFor (time: number) : Promise <void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, time);
    });

}