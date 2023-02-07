numbers = "0123456789"
cedex = " CEDEX"
# test = ["FORT DE FRANCE"]

with open("liste_villes_hopitaux.csv","r") as fRead:
    for ville in fRead.readlines():
# if True:
    # for ville in test:    

        # détection des éléments à retirer du nom de la ville
        ville = f" {ville.strip()} "
        if " ST " in ville:
            ville = ville.replace(" ST "," SAINT ")
        if " STE " in ville:
            ville = ville.replace(" STE "," SAINTE ")
        for number in numbers:
            if number in ville:
                ville = ville.replace(number,"")
        ville = ville.strip()
        for i in range(0,len(cedex)-1):
            longueur = len(cedex)-i
            if cedex[0:longueur] in ville[-longueur:]:
                ville = ville.replace(cedex[0:len(cedex)-i],"")    
        
        print(f'SELECT id FROM Projet_M1.cities WHERE (UPPER(slug) LIKE "%{ville}%") OR (id="35853") LIMIT 1;')