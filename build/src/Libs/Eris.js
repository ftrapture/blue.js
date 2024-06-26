"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Events_1 = __importDefault(require("../Utils/Events"));
/**
 * Eris class
 */
class Eris {
    /**
     * Instance of the blue client
     */
    blue;
    constructor(blue) {
        this.blue = blue;
        /**
         * Listen for raw WS events
         */
        this.blue.client.on("rawWS", async (packet) => {
            await this.blue.voiceState.updateVoice(packet);
        });
    }
    /**
     * Send data to the guild
     * @param data - Data to be sent
     * @returns Returns a promise with the sent data
     */
    send(data) {
        try {
            if (!data)
                throw new Error("Parameter of 'send' must be present.");
            return new Promise((resolve, reject) => {
                if (!this.blue.client)
                    return reject(data);
                const guild = this.blue.client.guilds.get(data.d.guild_id);
                if (guild) {
                    resolve(guild);
                    guild.shard.sendWS(data?.op, data?.d);
                    this.blue.emit(Events_1.default.api, `[${String("DEBUG").Blue()}]: ${this.blue.options.host} ---> [${String("RECEIVED: SHARD PAYLOAD").Green()}] ---> ${String(`${JSON.stringify(data)}`).Yellow()}`);
                }
                else {
                    reject(guild);
                }
            });
        }
        catch (e) {
            throw new Error("Unable to send data to the guild.");
        }
    }
}
exports.default = Eris;
//# sourceMappingURL=Eris.js.map