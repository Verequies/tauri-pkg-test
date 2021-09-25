<template>
	<div>
		<p>{{ sidecar_code }}</p>
		<p>{{ sidecar_signal }}</p>
		<p>{{ sidecar_stdout }}</p>
		<p>{{ sidecar_stderr }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { shell } from "@tauri-apps/api";

export default defineComponent({
	data() {
		return {
			sidecar_code: "",
			sidecar_signal: "",
			sidecar_stdout: "",
			sidecar_stderr: ""

		};
	},
	async mounted() {
		if (window.__TAURI__) {
			const sidecar =	await shell.Command.sidecar("backend").execute();
			this.sidecar_code = String(sidecar.code);
			this.sidecar_signal = String(sidecar.signal);
			this.sidecar_stdout = String(sidecar.stdout);
			this.sidecar_stderr = String(sidecar.stderr);
		}
	}
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
