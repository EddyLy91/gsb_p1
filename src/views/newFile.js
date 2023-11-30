/* __placeholder__ */
export default (await import('vue')).defineComponent({
data: () => ({
form: false,
login: null,
password: null,
loading: false,
showBanner: false,
bannerMessage: "", // Le message de la bannière
}),

methods: {
onSubmit() {
if (!this.form) return;

// Vérifiez les identifiants
if (this.login === "aribiA" && this.password === "aaaa") {
// Identifiants corrects, affichez la bannière verte
this.showBanner = true;
this.bannerMessage = "Connexion réussie!";
setTimeout(() => {
this.showBanner = false;
}, 3000); // Masquez la bannière après 3 secondes
} else {
// Identifiants incorrects, affichez la bannière rouge
this.showBanner = true;
this.bannerMessage = "Identifiants incorrects. Veuillez réessayer.";
}
required(v); {
return !!v || "Field is required";
}
}
}
});
